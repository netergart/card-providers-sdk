# v3 Changelog

## Breaking Changes

### Architecture Changes

- Complete restructuring of the SDK from a monolithic class to a modular architecture
- All functionality is now split into separate domain-specific modules:
  - `auth` - Authentication and user management
  - `session` - Session management
  - `kyc` - Know Your Customer operations
  - `profile` - User profile management
  - `wallet` - Wallet operations
  - `card` - Card management
  - `payment` - Payment processing
  - `bankAccount` - Bank account operations
  - `invoice` - Invoice handling
  - `currency` - Currency and blockchain operations

### Class Name Changes

- Renamed main class from `VaultProvider` to `VaultProviderV3`
- Removed inheritance from `ProviderBaseSDK`

### Method Access Changes

- All methods are now accessed through their respective domain modules
- Example: `vaultProvider.card.getCardDetails()` instead of `vaultProvider.getCardDetails()`

### Interface Changes

- Updated SDK options interface from `VaultSDKOptions` to `VaultV3SDKOptions`
- All domain-specific interfaces moved to their respective module directories
- Updated response interfaces to include more detailed information
- Added new interfaces for currency and blockchain operations

### Removed Methods and API Changes

#### Authentication Changes

- Removed `phoneConfirm` method (replaced with `signUpConfirm`)
- Removed `resendPhoneConfirm` method
- Removed `addEmail` method
- Removed `confirmEmail` method
- Removed `login` method (replaced with `signIn`)

#### Card Management Changes

- Removed `confirmCardPayloadOffer` method
- Removed `updateAddressCardRequest` method
- Removed `updateCardholderNameRequest` method
- Updated card interfaces with more detailed information
- Added new card status management methods
- Added new card transaction history methods

#### KYC Changes

- Removed `kyc1Start` method
- Removed `kyc1Finish` method
- Removed `kycLimit` method
- Removed `kycStatus` method
- Removed `kycSumSubStart` method

#### Wallet Changes

- Removed `getWallets` method
- Removed `createWallets` method
- Updated wallet interfaces with more detailed balance information
- Added new wallet transaction methods

## New Features

### New Modules

- Added new `session` module for managing user sessions
- Added new `invoice` module for invoice management
- Added new `bankAccount` module for bank account operations
- Added new `payment` module for payment processing
- Added new `currency` module for currency and blockchain operations

### New Currency Module Features

- Token information and management
- Blockchain list and details
- Exchange rate calculations
- Preferred currencies management
- Currency summary information
- Detailed currency settings and fees

### New Card Features

- Enhanced card status management
- Detailed transaction history
- Card balance tracking
- Card top-up information
- Card sensitive details management

### New Wallet Features

- Enhanced balance tracking
- Transaction history
- Wallet status management
- Transfer operations

## Improvements

- Better separation of concerns with domain-driven design
- More maintainable and testable code structure
- Reduced file sizes and improved code organization
- Better type safety with domain-specific interfaces
- More intuitive API structure with domain-specific modules
- Enhanced error handling with specific error responses
- Improved response types with more detailed information

## Migration Guide

To migrate from v1 to v3, you'll need to:

1. Update the import statement to use `VaultProviderV3`
2. Update the class instantiation to use `VaultProviderV3`
3. Update all method calls to use the new modular structure
4. Update any type imports to use the new domain-specific interfaces

Example:

```typescript
// before
const vault = new VaultProvider(options);
await vault.getCardDetails(data);

// after
const vault = new VaultProviderV3(options);
await vault.card.getCardDetails(data);
```

### Important Migration Notes

- Many methods have been removed or replaced with new v3 equivalents
- Authentication flow has been simplified with new `signUp`, `signUpConfirm`, and `signIn` methods
- Card management has been streamlined with a more focused set of operations
- KYC process has been updated with new methods and flow
- Profile and wallet operations have been reorganized into their respective modules
- New modules (session, invoice, bankAccount, payment, currency) provide additional functionality not available in v1
- Response interfaces have been updated with more detailed information
- Error handling has been improved with specific error responses
