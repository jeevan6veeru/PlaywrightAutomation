import { Page } from "@playwright/test";
export declare const orangeLoginLocators: {
    usernameInput: (page: Page) => import("playwright-core").Locator;
    passwordInput: (page: Page) => import("playwright-core").Locator;
    loginButton: (page: Page) => import("playwright-core").Locator;
    dashboardHeader: (page: Page) => import("playwright-core").Locator;
};
