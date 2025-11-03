"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.OrangeLoginPage = void 0;
const inversify_1 = require("inversify");
const orangeLoginLocators_1 = require("../locators/orangeLoginLocators");
let OrangeLoginPage = class OrangeLoginPage {
    constructor(page) {
        this.page = page;
        this.page = page;
    }
    navigateToLoginPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto('https://opensource-demo.orangehrmlive.com/');
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield orangeLoginLocators_1.orangeLoginLocators.usernameInput(this.page).fill(username);
            yield orangeLoginLocators_1.orangeLoginLocators.passwordInput(this.page).fill(password);
            yield orangeLoginLocators_1.orangeLoginLocators.loginButton(this.page).click();
            yield this.page.waitForLoadState('networkidle');
        });
    }
    verifyLoginSuccess() {
        return __awaiter(this, void 0, void 0, function* () {
            yield orangeLoginLocators_1.orangeLoginLocators.dashboardHeader(this.page).isVisible();
        });
    }
};
exports.OrangeLoginPage = OrangeLoginPage;
exports.OrangeLoginPage = OrangeLoginPage = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [Object])
], OrangeLoginPage);
//# sourceMappingURL=OrangeLoginPage.js.map