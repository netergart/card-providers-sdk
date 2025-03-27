# Migration Guide: Vault Provider SDK V1/V2 to V3

This guide provides a comprehensive overview of how to migrate from Vault Provider SDK versions 1 and 2 to version 3. The migration involves significant architectural changes and method replacements.

## Overview of Changes

Version 3 introduces a major restructuring from a monolithic class to a modular domain-driven architecture, with all functionality split into separate domain-specific modules.

## Setup Changes

### Initialization Changes

```typescript
// V1
import { VaultProvider } from "../../providers/vault/v1/VaultProvider";
const vault = new VaultProvider({
  xMerchantId: "merchant-id",
  baseUrl: "https://api.example.com",
  version: 1,
});

// V2
import { VaultProviderV2 } from "../../providers/vault/v2/VaultProvider";
const vault = new VaultProviderV2({
  partnerId: 123,
  partnerClientId: "client-id",
  baseUrl: "https://api.example.com",
  version: 2,
});

// V3
import { VaultProviderV3 } from "../../providers/vault/v3/VaultProvider";
const vault = new VaultProviderV3({
  partnerId: 123,
  partnerClientId: "client-id",
  baseUrl: "https://api.example.com",
  version: 3,
});
```

### Authentication Token Handling

V1 passed access tokens directly to methods, while V2 and V3 use a fluent API approach:

```typescript
// V1
const result = await vault.getCardDetails(data, accessToken);

// V2 and V3
const result = await vault.card.setToken(accessToken).getCardDetails(data);
```

## Authentication Methods Migration

| V1 Method              | V2 Method       | V3 Method              | Notes                      |
| ---------------------- | --------------- | ---------------------- | -------------------------- |
| `signUp()`             | `auth.signUp()` | `auth.signUp()`        | Interface changes          |
| `phoneConfirm()`       | -               | `auth.signUpConfirm()` | New interface              |
| `resendPhoneConfirm()` | -               | Removed                | Use alternative flow       |
| `addEmail()`           | -               | Removed                | Use updateInfo in profile  |
| `confirmEmail()`       | -               | Removed                | Not needed in V3 flow      |
| `login()`              | `auth.signIn()` | `auth.signIn()`        | Name and interface changes |
| -                      | `session.*`     | `session.*`            | New session management     |

### Authentication Flow Changes

V3 simplifies the authentication flow:

```typescript
// V3 authentication flow
const signUpResult = await vault.auth.signUp({
  email: "user@example.com",
  password: "password",
  phone: "+1234567890",
  countryCode: "US",
});

const confirmResult = await vault.auth.signUpConfirm({
  confirmationId: signUpResult.confirmationId,
  code: "123456",
});

const signInResult = await vault.auth.signIn({
  email: "user@example.com",
  password: "password",
  grantType: "password",
});

// Session management
await vault.session.setToken(signInResult.accessToken).getActiveSession();
await vault.session.setToken(signInResult.accessToken).logout();
```

## Card Management Migration

| V1 Method                       | V2 Method        | V3 Method                      | Notes                            |
| ------------------------------- | ---------------- | ------------------------------ | -------------------------------- |
| `getCardDetails()`              | `card.info()`    | `card.getCardDetails()`        | Similar functionality            |
| `cardRequest()`                 | `card.request()` | `card.request()`               | Interface changes                |
| `cardPoyoutsList()`             | -                | Replaced by payment module     | Use payment.payinList()          |
| `cardHistory()`                 | `card.history()` | `card.getTransactionHistory()` | Enhanced transaction history     |
| `softBlockCard()`               | `card.block()`   | `card.block()`                 | Similar functionality            |
| `softUnBlockCard()`             | `card.unblock()` | `card.unblock()`               | Similar functionality            |
| `setPinCode()`                  | `card.setPin()`  | `card.setPin()`                | Similar functionality            |
| `cardPrices()`                  | `card.prices()`  | `card.getPricing()`            | Enhanced pricing info            |
| `confirmCardPayloadOffer()`     | -                | Removed                        | Use payment.exchange()           |
| `updateAddressCardRequest()`    | -                | Removed                        | Use profile.updateAddress()      |
| `updateCardholderNameRequest()` | -                | Removed                        | Use profile.updateInfo()         |
| -                               | -                | `card.getBalance()`            | New method for card balance      |
| -                               | -                | `card.getSensitiveData()`      | New method for sensitive details |

### Card Management Flow Changes

V3 provides a more robust card management system:

```typescript
// Get card details
const cardDetails = await vault.card
  .setToken(accessToken)
  .getCardDetails({ cardId: "card-id" });

// Transaction history
const history = await vault.card.setToken(accessToken).getTransactionHistory({
  cardId: "card-id",
  dateFrom: "2022-01-01",
  dateTo: "2022-12-31",
});

// Card status management
await vault.card.setToken(accessToken).block({ cardId: "card-id" });
await vault.card.setToken(accessToken).unblock({ cardId: "card-id" });

// Card balance and sensitive data
const balance = await vault.card.setToken(accessToken).getCardBalance({
  cardId: "card-id",
});
const sensitiveData = await vault.card.setToken(accessToken).getSensitiveData({
  cardId: "card-id",
});
```

## KYC Migration

| V1 Method          | V2 Method      | V3 Method      | Notes                     |
| ------------------ | -------------- | -------------- | ------------------------- |
| `kycStatus()`      | `kyc.status()` | `kyc.status()` | Interface changes         |
| `kycLimit()`       | -              | Removed        | Use profile limits        |
| `kyc1Start()`      | `kyc.start()`  | `kyc.start()`  | Simplified flow           |
| `kyc1Finish()`     | -              | Removed        | Not needed in V3 flow     |
| `kycSumSubStart()` | -              | Removed        | Integrated in kyc.start() |

### KYC Flow Changes

```typescript
// Start KYC verification
const kycToken = await vault.kyc.setToken(accessToken).start();

// Check KYC status
const kycStatus = await vault.kyc.setToken(accessToken).status({
  applicantId: "applicant-id",
});
```

## Profile Management Migration

| V1 Method              | V2 Method                 | V3 Method              | Notes                    |
| ---------------------- | ------------------------- | ---------------------- | ------------------------ |
| `personalInfo()`       | `profile.info()`          | `profile.info()`       | Similar functionality    |
| `updatePersonalInfo()` | `profile.updateInfo()`    | `profile.updateInfo()` | Similar functionality    |
| -                      | `profile.addAddress()`    | Not directly available | Use profile.updateInfo() |
| -                      | `profile.updateAddress()` | Not directly available | Use profile.updateInfo() |

## Wallet Management Migration

| V1 Method         | V2 Method                | V3 Method                       | Notes                          |
| ----------------- | ------------------------ | ------------------------------- | ------------------------------ |
| `getWallets()`    | `wallet.balance()`       | `wallet.accountInfo()`          | Enhanced account info          |
| `createWallets()` | `wallet.createAccount()` | Not directly available          | Use other wallet methods       |
| -                 | -                        | `wallet.getBalanceLogList()`    | New transaction history method |
| -                 | -                        | `wallet.getBalanceLogReceipt()` | New receipt method             |
| -                 | -                        | `wallet.getAddress()`           | New crypto address method      |

### Wallet Flow Changes

```typescript
// Get account information
const accountInfo = await vault.wallet
  .setToken(accessToken)
  .accountInfo({ accountId: "account-id" });

// Get transaction history
const transactions = await vault.wallet
  .setToken(accessToken)
  .getBalanceLogList({
    accountId: "account-id",
    dateFrom: "2022-01-01",
    dateTo: "2022-12-31",
  });

// Get transaction receipt
const receipt = await vault.wallet
  .setToken(accessToken)
  .getBalanceLogReceipt({ logId: "transaction-id" });
```

## New Modules in V3

V3 introduces several new modules not present in V1:

1. **Payment Module**: Handles payment processing

   ```typescript
   // Exchange currency
   const exchange = await vault.payment.setToken(accessToken).exchange({
     amount: 100,
     fromCurrency: "USD",
     toCurrency: "EUR",
   });

   // Process payment
   const payment = await vault.payment.setToken(accessToken).payIn({
     amount: 100,
     currency: "USD",
     paymentMethod: "card",
   });

   // Withdraw funds
   const withdrawal = await vault.payment.setToken(accessToken).withdraw({
     amount: 100,
     currency: "USD",
     accountId: "account-id",
   });
   ```

2. **BankAccount Module**: Manages bank accounts

   ```typescript
   // Get bank account information
   const accounts = await vault.bankAccount.setToken(accessToken).list();
   ```

3. **Invoice Module**: Handles invoice operations

   ```typescript
   // Create an invoice
   const invoice = await vault.invoice.setToken(accessToken).create({
     amount: 100,
     currency: "USD",
     description: "Service payment",
   });
   ```

4. **Currency Module**: Manages currency operations

   ```typescript
   // Get exchange rates
   const rates = await vault.currency.setToken(accessToken).getExchangeRate({
     fromCurrency: "USD",
     toCurrency: "EUR",
   });

   // Get token information
   const tokenInfo = await vault.currency.setToken(accessToken).getTokenInfo({
     tokenId: "token-id",
   });
   ```

## Migration Strategy

1. **Gradual Migration**: Implement V3 for new features while maintaining V1/V2 for existing functionality
2. **Module-by-Module Migration**: Start with core modules (auth, profile, card)
3. **Testing**: Thoroughly test each migrated module before moving to the next
4. **Interface Adaptation**: Update your internal interfaces to match V3's more detailed responses

## Special Considerations

1. **Authentication Flow**: The authentication flow is significantly different in V3, requiring adjustments to your auth process
2. **Removed Methods**: Some V1 methods have been removed; find appropriate V3 alternatives
3. **Response Interfaces**: V3 provides more detailed response interfaces, requiring updates to your data handling
4. **Error Handling**: V3 enhances error handling with specific error responses
5. **Session Management**: V3 introduces dedicated session management not present in V1
6. **Type Safety**: V3 enforces stricter type checking, requiring updates to your type definitions
7. **Security**: V3 introduces enhanced security measures, requiring updates to your security handling
8. **Performance**: V3 optimizes API calls and payload sizes, potentially affecting your caching strategy
