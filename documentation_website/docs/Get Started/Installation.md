## Installation

You can install the package using npm:

```bash
npm install beans-merchant-sdk
```

## API Reference

Create an instance with one of the static factory methods. The constructor is private, so do not use `new`.

### `BeansMerchantSdk.production(apiKey, fetchFunction?)`

Creates an SDK instance for the production environment.

### `BeansMerchantSdk.staging(apiKey, fetchFunction?)`

Creates an SDK instance for the staging environment.

### `BeansMerchantSdk.custom(apiBaseUrl, apiKey, fetchFunction?)`

Creates an SDK instance for a custom API base URL, for example a locally hosted Beans API.

- `apiBaseUrl`: The API base URL including the version, for example `https://localhost:5200/v4`. A trailing `/` is removed.

Parameters of all three methods:

- `apiKey`: Your Beans Merchant API key.
- `fetchFunction`: Optional function used instead of the global `fetch`, for example to add logging or to use a fetch polyfill.
