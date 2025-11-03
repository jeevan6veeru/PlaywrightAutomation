import { Page, Locator } from '@playwright/test';
export declare class OrdersReviewPage {
    page: Page;
    country: Locator;
    dropdown: Locator;
    emailId: Locator;
    submit: Locator;
    orderConfirmationText: Locator;
    orderId: Locator;
    constructor(page: Page);
    searchCountryAndSelect(countryCode: string, countryName: string): Promise<void>;
    VerifyEmailId(username: string): Promise<void>;
    SubmitAndGetOrderId(): Promise<string | null>;
}
