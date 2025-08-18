import { test, expect } from '@playwright/test';

test.describe('', async() => {
    test('End to end test case for ecommerce', async ({page}) => {
         const email = 'jeevan6veeru@gmail.com';
        const password = 'Jeevan@10';
        const productName = 'ZARA COAT 3';
        const products = page.locator(".card-body");
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
        // const titles = await page.locator('.card-body b').allTextContents();
        // console.log(titles);
        const count = await products.count();
        console.log(count);
        for (let i = 0; i < count; i++) {
            const text = await products.nth(i).locator('b').textContent();
            console.log(text);
            if (text === productName) {
                await products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
        await page.locator('[routerlink*="cart"]').click();
        await page.locator('div li').first().waitFor();
        const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
        expect(bool).toBeTruthy();
        await page.locator('.subtotal button').click();
        await expect(page.locator('.payment__type--cc')).toContainText('Credit Card');



    })
})
