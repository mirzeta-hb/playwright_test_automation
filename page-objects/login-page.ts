import { Page } from "@playwright/test";

export default class LoginPage{
    page: Page;
    readonly otherservicesButton;
    readonly loginOffice;
    readonly loginButton;
    readonly acceptCookieButton;
    readonly usernameField;
    readonly passwordField;
    readonly signInButton;



    constructor(page: Page){
        this.page = page;
        this.otherservicesButton = page.locator("//span[text()='or with other services']")
        this.loginOffice = page.locator("//form[@action='/login/office365']")
        this.loginButton = page.locator("//a[text()='Log In']")
        this.acceptCookieButton = page.locator("//div[@id = 'cb-collapsed']/div/a[text()='Accept All']")
        this.usernameField = page.locator("//label[@for ='login_email_login']")
        this.passwordField = page.locator("//label[@for ='login_email_password']")
        this.signInButton = page.locator("//input[@id ='btn_signin']")


    }
    
    async acceptCookies(){
        await this.page.setDefaultTimeout(50000)
        await this.acceptCookieButton.click();
    }

    async clickLoginButton(){
        await this.page.setDefaultTimeout(10000)
        await this.loginButton.click();

    }

    async loginMeisterTask(username: string, password: string){
        await this.usernameField.type(username);
        await this.page.waitForTimeout(5000);
        await this.passwordField.type(password);
        await this.page.waitForTimeout(5000);
        await this.signInButton.click();
        await this.page.waitForTimeout(5000);
    }

}