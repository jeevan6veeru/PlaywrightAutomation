import { Page, Locator } from "@playwright/test";
export declare class CartPage {
    page: Page;
    cartProducts: Locator;
    productsText: Locator;
    cart: Locator;
    orders: Locator;
    checkout: Locator;
    constructor(page: Page);
    VerifyProductIsDisplayed(productName: string): Promise<void>;
    Checkout(): Promise<void>;
    getProductLocator(productName: string): Locator;
}
