import { Locator, Page, expect } from "@playwright/test";
import { title } from "./meister-tasks-home-page";

export default class ProjectPage{
    page: Page;
    readonly archiveTaskButton;
    readonly createdTask: (createdTask: string) => Locator;
    readonly completeButton;


    constructor(page:Page){
        this.page = page
        this.archiveTaskButton = page.locator("//div[text() = 'Archive']")
        this.createdTask = (title) => page.locator(`//div[text() = '${title}']`)
        this.completeButton = page.locator("//div[text()='Complete']")


    }

    async verifyTaskIsCreated(){
        const openTask = await this.createdTask(title);
        console.log("xpath"+ openTask)
        expect(await openTask.isVisible()).toBe(true)
    }

    async archiveTask(){
        const openTask = await this.createdTask(title);
        await openTask.click();
        await this.completeButton.click()

        await this.archiveTaskButton.click()
        return this
    }
}