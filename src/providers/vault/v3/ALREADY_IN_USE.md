# Vault Methods Usage Analysis

This document provides an overview of how the two vault versions (v1 and v2) are being used throughout the codebase.

## Vault V1 Service

The V1 vault service is primarily used in the `banking` module and is accessed through `VaultService.getInstance()`.

### Authentication Methods (v1)

- `signUp()` - Used for user registration
- `confirmEmail()` - Email confirmation during registration process
- `resendEmailConfirm()` - Resending email confirmation
- `phoneConfirm()` - Phone number confirmation
- `resendPhoneConfirm()` - Resending phone confirmation code
- `login()` - User authentication

### Card Management (v1)

- `cardPoyoutsList()` - Lists card payout information
- `getPayloadLimits()` - Retrieves payload limits for cards
- `addCardPayout()` - Adds a card payout
- `personalInfo()` - Gets personal information
- `cardRequest()` - Makes card requests
- `updatePersonalInfo()` - Updates personal information
- `cardHistory()` - Retrieves transaction history for a card
- `softBlockCard()` - Temporarily blocks a card
- `softUnBlockCard()` - Unblocks a temporarily blocked card
- `setPinCode()` - Sets PIN code for a card
- `getCardDetails()` - Gets card details

### KYC Methods (v1)

- `kycStatus()` - Gets KYC verification status
- `limits()` - Retrieves limits based on KYC level
- `kyc1Start()` - Initiates KYC level 1 verification
- `kycSumSubStart()` - Initiates SumSub KYC verification
- `kyc1Finish()` - Completes KYC level 1 verification

### Wallet Methods (v1)

- `getWallets()` - Retrieves wallet information

## Vault V2 Service

The V2 vault service is used in the `bankingV2` module and is accessed through `VaultV2Service.getInstance()` with a more structured API approach that uses namespaces.

### Authentication Methods (v2)

- `auth.signIn()` - User authentication
- `auth.signUp()` - User registration

### Card Management (v2)

- `card.setToken()` - Sets the authentication token for card operations
- `card.prices()` - Gets card pricing information
- `card.list()` - Lists cards associated with a user

### Profile Management (v2)

- `profile.setToken()` - Sets the authentication token for profile operations
- `profile.updateInfo()` - Updates user profile information
- `profile.info()` - Gets user profile information
- `profile.addAddress()` - Adds a new address to user profile
- `profile.updateAddress()` - Updates an existing address

### KYC Management (v2)

- `kyc.setToken()` - Sets the authentication token for KYC operations
- `kyc.status()` - Gets KYC verification status
- `kyc.start()` - Initiates KYC verification
- `kyc.updateStatus()` - Updates KYC verification status

### Wallet and Banking (v2)

- `wallet.setToken()` - Sets the authentication token for wallet operations
- `wallet.createAccount()` - Creates a new account
- `wallet.updateBalance()` - Updates account balance
- `wallet.balance()` - Gets account balance
- `bankAccount.setToken()` - Sets the authentication token for bank account operations
- `bankAccount.create()` - Creates a bank account
- `bankAccount.list()` - Lists bank accounts
- `bankAccount.infoById()` - Gets bank account information by ID

### Other Features (v2)

- `setAccessTokenToRedis()` - Stores access token in Redis for future use

## Architectural Differences

1. **Structure**:

   - V1 uses flat method naming with direct method calls
   - V2 uses a more structured approach with namespaces (auth, card, profile, kyc, wallet, bankAccount)

2. **Authentication**:

   - V1 passes access tokens as parameters to most methods
   - V2 uses a fluent API with `setToken()` method to establish context before operations

3. **Redis Integration**:

   - V2 introduces explicit Redis token storage through `setAccessTokenToRedis()`

4. **Module Usage**:
   - V1 is used in the original `banking` module
   - V2 is used in the newer `bankingV2` module, suggesting a transition or upgrade path

## Implementation Notes

The codebase appears to be in a transition phase, with both vault versions active:

1. The newer bankingV2 modules exclusively use VaultV2Service
2. The older banking modules use the original VaultService
3. Some methods have commented-out alternatives, suggesting ongoing migration
