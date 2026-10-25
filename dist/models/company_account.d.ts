export interface CompanyAccount {
    id: string;
    companyId: string;
    stellarAccountId: string;
    /**
     * The account name per language code, for example `{ en: 'Shop' }`. English (`en`) is always present.
     * Use `LanguageString.from(account.name)` for the helper methods.
     */
    name: Record<string, string>;
    avatarUrl?: string;
}
//# sourceMappingURL=company_account.d.ts.map