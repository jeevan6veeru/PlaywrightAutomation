import { Page, Locator } from '@playwright/test';
export declare class OrdersHistoryPage {
    page: Page;
    ordersTable: Locator;
    rows: Locator;
    orderdIdDetails: Locator;
    constructor(page: Page);
    searchOrderAndSelect(orderId: any): Promise<void>;
    getOrderId(): Promise<string | null>;
}
