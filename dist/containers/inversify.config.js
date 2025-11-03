"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("../types");
const OrangeLoginPage_1 = require("../pages/OrangeLoginPage");
const container = new inversify_1.Container({ defaultScope: "Singleton" });
exports.container = container;
container.bind(types_1.TYPES.IoranageHrmsLoginPage).to(OrangeLoginPage_1.OrangeLoginPage).inTransientScope();
container.bind(types_1.TYPES.Page).toConstantValue({});
//# sourceMappingURL=inversify.config.js.map