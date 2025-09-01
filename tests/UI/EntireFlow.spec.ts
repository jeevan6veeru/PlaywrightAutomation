import { test, expect } from '@playwright/test';
import { POManager } from '../../pom/POManager';
const data = JSON.parse(JSON.stringify(require('../../utils/EntireFlowTestData.json')));

test('@Smoke Entire flow till checkout', async ({ page }) => {
  const poManager = new POManager(page);
  //js file- Login js, DashboardPage
  //const products = page.locator(".card-body");
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(data.username, data.password);
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(data.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(data.productName);
  await cartPage.Checkout();

  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");
  let orderId : any = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);
  await dashboardPage.navigateToOrders();
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(orderId);
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});
