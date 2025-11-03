import {Page} from "@playwright/test"

export const orangeLoginLocators = {
    usernameInput: (page: Page) => page.getByPlaceholder('Username'),
    passwordInput: (page: Page) => page.getByPlaceholder('Password'),
    loginButton: (page: Page) => page.getByRole('button', { name: 'Login' }),
    dashboardHeader: (page: Page) => page.locator('h6:has-text("Dashboard")'),
}