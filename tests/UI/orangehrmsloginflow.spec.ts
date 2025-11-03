import "reflect-metadata";
import { test, expect } from '@playwright/test';
import { container } from '../../containers/inversify.config';
import { TYPES } from '../../types';
import { IorangeHrmsLoginPage } from '../../interfaces/IorangeHrmsLoginPage';



test.describe('OrangeHRMS Login Flow cases', () => {
    test('should navigate to login page and perform login', async ({ page }) => {
        const loginPage = container.get<IorangeHrmsLoginPage>(TYPES.IoranageHrmsLoginPage);
        (loginPage as any).page = page;
        await loginPage.navigateToLoginPage();
        await loginPage.login('Admin', 'admin123');
        await loginPage.verifyLoginSuccess();

    })

});


