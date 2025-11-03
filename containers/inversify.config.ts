import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../types";
import { OrangeLoginPage } from "../pages/OrangeLoginPage";
import { IorangeHrmsLoginPage } from "../interfaces/IorangeHrmsLoginPage";
import { Page } from "@playwright/test"

const container = new Container();
container.bind<IorangeHrmsLoginPage>(TYPES.IoranageHrmsLoginPage).to(OrangeLoginPage);

export { container };