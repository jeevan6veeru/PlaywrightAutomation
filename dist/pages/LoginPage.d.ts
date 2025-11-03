import { Locator, Page } from "@playwright/test";
export declare class LoginPage {
    page: Page;
    signInbutton: Locator;
    userName: Locator;
    password: Locator;
    constructor(page: Page);
    goTo(): Promise<void>;
    validLogin(username: string, password: string): Promise<void>;
}
