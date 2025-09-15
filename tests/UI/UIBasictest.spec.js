import { test, expect } from '@playwright/test';

    let userName;
    let password;
    let signButton;
    let cardTitles;

test.beforeEach(async ({ page }) => {
    userName = page.locator('#username');
    password = page.locator('#password');
    signButton = page.locator('#signInBtn');
    cardTitles = page.locator('.card-body a');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
})

test('Valid Login case', async ({ page }) => {
    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await signButton.click();
    await expect(page.locator('h1.my-4')).toHaveText('Shop Name');
})

test('Invalid Login test message validation', async ({ page }) => {
    await userName.fill('rahulshetty');
    await password.fill('learning');
    await signButton.click();
    // get the error message in console
    console.log(await page.locator('[style*="block"]').textContent());
    // validate the error message by giving partial text
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
})
test('Invalid Login continution validation', async ({ page }) => {
    await userName.fill('rahulshetty');
    await password.fill('learning');
    await signButton.click();
    // get the error message in console
    console.log(await page.locator('[style*="block"]').textContent());
    // validate the error message by giving partial text
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
    await userName.fill('');
    await password.fill('rahulshettyacademy');
    await signButton.click();
    // console.log(await cardTitles.first().textContent());
    // console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
})
test('UI controls validation', async ({ page }) => {
    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await page.locator('select.form-control').selectOption('consult');
    // await signButton.click();

})

test('Handling windows', async ({ browser }) => {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").textContent());

});

