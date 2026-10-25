---
sidebar_position: 4
sidebar_title: 'Methods'
---

Call these methods on an instance from `BeansMerchantSdk.production(...)`, `BeansMerchantSdk.staging(...)` or `BeansMerchantSdk.custom(...)`.

Every method returns a Promise. When the API answers with an unexpected status, the Promise rejects with an `ApiException` (`statusCode`, `response`, `message`).

### `fetchStellarCurrencies(stellarAccountId)`

Fetches the Stellar currencies for the account.

- `stellarAccountId`: Your Stellar account ID.

Returns `Promise<FetchStellarCurrenciesResponse>`:

- `stellarCurrencies`: An array of `StellarCurrency` (`id`, `name`, `code`, `issuerId`, `issuerName`, `precision`, `iconUrl`).

### `generateDeeplink(stellarAccountId, stellarCurrencyId, amount, memo, maxAllowedPayments = null, webhookUrl = null)`

Creates a payment request with a deeplink.

- `stellarAccountId`: Your Stellar account ID.
- `stellarCurrencyId`: Stellar currency ID.
- `amount`: Amount for the payment request.
- `memo`: Memo for the payment request.
- `maxAllowedPayments`: Optional maximum number of payments. Unlimited is `-1`. Default is `1`.
- `webhookUrl`: Optional webhook URL for payment received notification.

Returns `Promise<DeeplinkResponse>`:

- `id`: The ID of the payment request.
- `deeplink`: The Beans App deeplink for the payment request.

### `generatePngQrCode(stellarAccountId, stellarCurrencyId, amount, memo, maxAllowedPayments = null, webhookUrl = null, preferredSize = null)`

Creates a payment request with a PNG QR code.

- The first six parameters are the same as for `generateDeeplink`.
- `preferredSize`: Optional preferred size of the QR code. The API makes the size as close as possible to this value.

Returns `Promise<PngQrCodeResponse>`:

- `id`: The ID of the payment request.
- `deeplink`: The Beans App deeplink for the payment request.
- `pngQrCodeDataUri`: The PNG QR code as a data URI (`data:image/png;base64,...`). Use it directly as an `<img>` `src`.

### `generateSvgQrCode(stellarAccountId, stellarCurrencyId, amount, memo, maxAllowedPayments = null, webhookUrl = null, size = null)`

Creates a payment request with an SVG QR code.

- The first six parameters are the same as for `generateDeeplink`.
- `size`: Optional size of the QR code.

Returns `Promise<SvgQrCodeResponse>`:

- `id`: The ID of the payment request.
- `deeplink`: The Beans App deeplink for the payment request.
- `svgQrCode`: The SVG QR code containing the deeplink.

### `getPaymentRequestStatus(paymentRequestId)`

Gets the status of a payment request.

- `paymentRequestId`: The `id` from `generateDeeplink`, `generatePngQrCode` or `generateSvgQrCode`.

Returns `Promise<PaymentRequestStatusResponse>`:

- `status`: `Pending` or `Completed`.

### `createCompanyAccount(stellarAccountId, name)`

Creates an account for the company.

- `stellarAccountId`: The Stellar account ID for the account.
- `name`: The name per language, as a `LanguageString` or a plain object such as `{ en: 'Shop', vn: 'Cửa hàng' }`. English (`en`) is required.

Returns `Promise<CreateCompanyAccountResponse>`:

- `account`: The created `CompanyAccount`.

### `uploadCompanyAccountAvatar(companyId, stellarAccountId, imageData)`

Uploads an avatar for a company account.

- `companyId`: The ID of the company, or `'me'` for the company of the API key.
- `stellarAccountId`: The Stellar account ID of the account.
- `imageData`: The image as a `File`, `Blob` or `ArrayBuffer`.

Returns `Promise<CompanyAccount>`: the updated account.

### `getAvatarUrlBytes(avatarUrl)`

Downloads an avatar image.

- `avatarUrl`: The `avatarUrl` of a `CompanyAccount`.

Returns `Promise<ArrayBuffer>`: the image data.

### `deleteCompanyAccount(stellarAccountId)`

Deletes a company account.

- `stellarAccountId`: The Stellar account ID of the account to delete.

Returns `Promise<DeleteCompanyAccountResponse>`: an empty object.

### `getCompanyAccounts()`

Fetches all company accounts.

Returns `Promise<GetCompanyAccountsResponseDto>`:

- `accounts`: An array of `CompanyAccount`.

### `getCompanyAccount(stellarAccountId)`

Fetches one company account.

- `stellarAccountId`: The Stellar account ID of the account.

Returns `Promise<GetCompanyAccountResponseDto>`:

- `account`: The `CompanyAccount`.

### `CompanyAccount`

- `id`: The ID of the account.
- `companyId`: The ID of the company.
- `stellarAccountId`: The Stellar account ID.
- `name`: The name per language, for example `{ en: 'Shop' }`.
- `avatarUrl`: Optional URL of the avatar.
