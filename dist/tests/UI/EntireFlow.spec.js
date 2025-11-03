"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const POManager_1 = require("../../pages/POManager");
const data = JSON.parse(JSON.stringify(require('../../utils/EntireFlowTestData.json')));
(0, test_1.test)('@Smoke Entire flow till checkout', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    const poManager = new POManager_1.POManager(page);
    //js file- Login js, DashboardPage
    //const products = page.locator(".card-body");
    const loginPage = poManager.getLoginPage();
    yield loginPage.goTo();
    yield loginPage.validLogin(data.username, data.password);
    const dashboardPage = poManager.getDashboardPage();
    yield dashboardPage.searchProductAddCart(data.productName);
    yield dashboardPage.navigateToCart();
    const cartPage = poManager.getCartPage();
    yield cartPage.VerifyProductIsDisplayed(data.productName);
    yield cartPage.Checkout();
    const ordersReviewPage = poManager.getOrdersReviewPage();
    yield ordersReviewPage.searchCountryAndSelect("ind", "India");
    let orderId = yield ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
    yield dashboardPage.navigateToOrders();
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    yield ordersHistoryPage.searchOrderAndSelect(orderId);
    (0, test_1.expect)(orderId.includes(yield ordersHistoryPage.getOrderId())).toBeTruthy();
}));
//# sourceMappingURL=EntireFlow.spec.js.map