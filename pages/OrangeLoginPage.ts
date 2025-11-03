import { Page } from "@playwright/test";
import { injectable, inject } from "inversify";
import { orangeLoginLocators } from "../locators/orangeLoginLocators";
import { IorangeHrmsLoginPage } from "../interfaces/IorangeHrmsLoginPage";
import { TYPES } from "../types";

@injectable()
export class OrangeLoginPage implements IorangeHrmsLoginPage {

    constructor(private page: Page) {
        this.page = page;
    }

    async navigateToLoginPage(): Promise<void> {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }
    async login(username: string, password: string): Promise<void> {
        await orangeLoginLocators.usernameInput(this.page).fill(username);
        await orangeLoginLocators.passwordInput(this.page).fill(password);
        await orangeLoginLocators.loginButton(this.page).click();
        await this.page.waitForLoadState('networkidle');
    }
    async verifyLoginSuccess(): Promise<void> {
        await orangeLoginLocators.dashboardHeader(this.page).isVisible();
    }

}
