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
require("reflect-metadata");
const test_1 = require("@playwright/test");
const inversify_config_1 = require("../../containers/inversify.config");
const types_1 = require("../../types");
test_1.test.describe('OrangeHRMS Login Flow cases', () => {
    (0, test_1.test)('should navigate to login page and perform login', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
        const loginPage = inversify_config_1.container.get(types_1.TYPES.IoranageHrmsLoginPage);
        loginPage.page = page;
        yield loginPage.navigateToLoginPage();
        yield loginPage.login('Admin', 'admin123');
        yield loginPage.verifyLoginSuccess();
    }));
});
//# sourceMappingURL=orangehrmsloginflow.spec.js.map