# yomi-card-providers-sdk

```
npm i yomi-card-providers-sdk
```

# Example

```
const providers = require('yomi-card-providers-sdk');

const instanceProvider = new providers.ProviderSDK();

const vault = instanceProvider.vault({xMerchantId: 'bece038f-2e46-49f4-b25e-89cd38d6dc**', url: 'https://api.vault.sandbox.testessential.net'});

const login = await vault.login({number: '447781234***', password: '1234Qwerty'});
```