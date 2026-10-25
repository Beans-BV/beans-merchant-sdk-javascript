## Unreleased
*  - Fixed `Illegal invocation` error in browsers when no custom fetch function is passed
*  - Fixed `LanguageString` serialization: `createCompanyAccount()` sent `{"_map":{}}` as the name
*  - Exported `LanguageString`, `DeeplinkResponse`, `PaymentRequestResponse` and `PaymentRequestStatusResponse`
*  - `createCompanyAccount()` now accepts a `LanguageString` or a plain object as the name
*
* **BREAKING CHANGES (types only, the runtime values do not change):**
*  - `DeleteCompanyAccountResponse` is now an empty object, which is what the API returns
*  - `CompanyAccount.name` is now `Record<string, string>`, which is what the API returns

## 5.0.0
*  - Added `avatarUrl` to `CompanyAccount` class
*  - Added `LanguageString` class for better multi-language support
*  - Added `GetCompanyAccountResponseDto` and `GetCompanyAccountsResponseDto` response DTOs
*
* **BREAKING CHANGES:**
*  - Renamed `getMerchantAccounts()` method to `getCompanyAccounts()`
*  - Renamed `getMerchantAccount()` method to `getCompanyAccount()`
*  - `getCompanyAccounts()` now returns `GetCompanyAccountsResponseDto` instead of `CompanyAccount[]`
*  - `getCompanyAccount()` now returns `GetCompanyAccountResponseDto` instead of `CompanyAccount`
*  - Removed `getCompanyAccountAvatar()` method - instead use the `AvatarUrl` in combination with `getAvatarUrlBytes(avatarUrl)`
*  - `CompanyAccount` class it's `name` property is now of type `LanguageString` instead of `Record<string, string>`
*  - `createCompanyAccount()` method now requires `LanguageString` instead of `Record<string, string>`

## 3.0.0
* Beans API v4 support
* 
* **BREAKING CHANGES:**
*  - API version increased from v3 to v4

## 2.0.0
* Changes so the SDK is more in line with the Dart SDK
* 
* **BREAKING CHANGES:**
*  - Removed `BeansMerchantSdkEnvironment` class
*  - Added static factory method `BeansMerchantSdk.production(..)` to instantiate the SDK
*  - Added static factory method `BeansMerchantSdk.staging(..)` to instantiate the SDK
*  - Added static factory method `BeansMerchantSdk.custom(..)` to instantiate the SDK

## 1.0.0
* Initial release