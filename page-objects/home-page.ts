import { Page, expect } from "@playwright/test";

export default class HomePage{

    protected page: Page;
    readonly title;
    readonly findOutMoreLink;
    readonly acceptCookieButton;

    constructor(page: Page){
        this.page = page
        this.title = page.locator("//h1[text()='Work Beautifully Together.']")
        this.findOutMoreLink = page.locator("//a[@href='https://www.meistertask.com/']")
        this.acceptCookieButton = page.locator("//div[@id = 'cb-collapsed']/div/a[text()='Accept All']")
    }

    async homePageGoto(){
        await this.page.goto("/")
        await this.acceptCookies();
    }

    async acceptCookies(){
        await this.acceptCookieButton.click();
    }

    async checkHomePageTitle(){
        expect(await this.title.isVisible()).toBe(true);
    }

    async navigateToTasks(){
        await this.findOutMoreLink.click()
    }

}