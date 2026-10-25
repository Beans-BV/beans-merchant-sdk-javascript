---
sidebar_position: 2
---
## Usage

```js
// Import the BeansMerchantSdk class
import { BeansMerchantSdk } from 'beans-merchant-sdk';

// Create an instance for the staging environment
const sdk = BeansMerchantSdk.staging('your-api-key');

// Fetch the Stellar currencies of your account
sdk.fetchStellarCurrencies('stellarAccountId')
  .then(response => {
    console.log('Available currencies:', response.stellarCurrencies);
  })
  .catch(error => {
    console.error('Error fetching currencies:', error);
  });

// Generate an SVG QR code for a payment request of 10 units
sdk.generateSvgQrCode('stellarAccountId', 'stellarCurrencyId', 10, 'memo')
  .then(response => {
    console.log('Payment request ID:', response.id);
    console.log('SVG QR code:', response.svgQrCode);
  })
  .catch(error => {
    console.error('Error generating QR code:', error);
  });
```
