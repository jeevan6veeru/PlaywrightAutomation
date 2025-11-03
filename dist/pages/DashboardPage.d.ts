import { Page, Locator } from "@playwright/test";
export declare class DashboardPage {
    page: Page;
    products: Locator;
    productsText: Locator;
    cart: Locator;
    orders: Locator;
    constructor(page: Page);
    searchProductAddCart(productName: string): Promise<void>;
    navigateToOrders(): Promise<void>;
    navigateToCart(): Promise<void>;
}
