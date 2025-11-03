"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orangeLoginLocators = void 0;
exports.orangeLoginLocators = {
    usernameInput: (page) => page.getByPlaceholder('Username'),
    passwordInput: (page) => page.getByPlaceholder('Password'),
    loginButton: (page) => page.getByRole('button', { name: 'Login' }),
    dashboardHeader: (page) => page.locator('h6:has-text("Dashboard")'),
};
//# sourceMappingURL=orangeLoginLocators.js.map