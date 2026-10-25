---
sidebar_position: 1
sidebar_label: 'Beans Merchant SDK'
---
# beans-merchant

[![npm version](https://badge.fury.io/js/beans-merchant.svg)](https://www.npmjs.com/package/beans-merchant-sdk)

Beans Merchant is a JavaScript library for interacting with the Beans Merchant API. It provides a convenient way to integrate Beans Merchant functionality into your web applications.

## Installation

You can install the package using npm:

```bash
npm install beans-merchant-sdk
```

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

## API Reference

Create an instance with one of the static factory methods. The constructor is private, so do not use `new`.

- `BeansMerchantSdk.production(apiKey, fetchFunction?)`: the production environment.
- `BeansMerchantSdk.staging(apiKey, fetchFunction?)`: the staging environment.
- `BeansMerchantSdk.custom(apiBaseUrl, apiKey, fetchFunction?)`: a custom API base URL including the version, for example `https://localhost:5200/v4`.

`fetchFunction` is optional. It replaces the global `fetch`, for example to add logging or to use a fetch polyfill.

### Methods

- `fetchStellarCurrencies(stellarAccountId)`
- `generateDeeplink(stellarAccountId, stellarCurrencyId, amount, memo, maxAllowedPayments?, webhookUrl?)`
- `generatePngQrCode(stellarAccountId, stellarCurrencyId, amount, memo, maxAllowedPayments?, webhookUrl?, preferredSize?)`
- `generateSvgQrCode(stellarAccountId, stellarCurrencyId, amount, memo, maxAllowedPayments?, webhookUrl?, size?)`
- `getPaymentRequestStatus(paymentRequestId)`
- `createCompanyAccount(stellarAccountId, name)`
- `uploadCompanyAccountAvatar(companyId, stellarAccountId, imageData)`
- `getAvatarUrlBytes(avatarUrl)`
- `deleteCompanyAccount(stellarAccountId)`
- `getCompanyAccounts()`
- `getCompanyAccount(stellarAccountId)`

See [Methods](./Methods.md) for the parameters and the response fields.
