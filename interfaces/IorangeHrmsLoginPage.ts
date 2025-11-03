export interface IorangeHrmsLoginPage {

navigateToLoginPage(): Promise<void>;
login(username: string, password: string): Promise<void>;
verifyLoginSuccess(): Promise<void>

}