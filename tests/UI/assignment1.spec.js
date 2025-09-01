import { test, expect } from '@playwright/test';
import { title } from 'process';



    test('Validating Zara coat 3 product', async ({ page }) => {
        const email = 'jeevan6veeru@gmail.com';
        const password = 'Jeevan@10';
        const productName = 'ZARA COAT 3';
        const products = page.locator(".card-body b");
        await page.goto("https://rahulshettyacademy.com/client");
        console.log(await page.title());
        await expect(page).toHaveTitle("Let's Shop");
        await page.locator('#userEmail').fill(email);
        await page.locator('#userPassword').fill(password);
        await page.locator('#login').click();
        // verifying I'm on products page
        await expect(page.locator('div.mt-1 p')).toContainText('Automation Practice');
        // waiting for all API's to load
        await page.waitForLoadState('networkidle');
       // await page.locator(".card-body b").first().waitFor();
        const titles = await products.allTextContents();
        console.log(titles);
        // validating the product name
        await expect(products.first()).toHaveText(productName);
    })

