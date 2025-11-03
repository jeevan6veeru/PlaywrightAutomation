import { Page } from "@playwright/test";
import { IorangeHrmsLoginPage } from "../interfaces/IorangeHrmsLoginPage";
export declare class OrangeLoginPage implements IorangeHrmsLoginPage {
    private page;
    constructor(page: Page);
    navigateToLoginPage(): Promise<void>;
    login(username: string, password: string): Promise<void>;
    verifyLoginSuccess(): Promise<void>;
}
