import { Page, expect } from "@playwright/test";

export let title: string;

export default class MeisterTask{
    page: Page;
    readonly myTasks;
    readonly createTaskButton;
    readonly taskTitle;
    readonly confirmTaskButton;
    readonly addCheckList;
    readonly closeButton;
    readonly checkListInputField;
    readonly projects;
    readonly testProject;

    constructor(page: Page)
    {
        this.page = page
        this.myTasks = page.locator("//div[text()='My Tasks']")
        this.createTaskButton = page.locator("//div[@data-test-id='header-button-add-task-right']")
        this.taskTitle = page.locator("input[placeholder= 'Task Title']")
        this.confirmTaskButton = page.locator("//div[text() = 'Create Task']")
        this.addCheckList = page.locator("//div[text() = 'Add Checklist Item']")
        this.checkListInputField = page.locator("//div[text() = 'Checklist']/following::div[@contenteditable = 'true']").first()
        this.closeButton = page.locator("//div[@data-test-id= 'button-close-right']")
        this.projects = page.locator("//div[text()='Projects']")
        this.testProject = page.locator("//div[text() = 'TestProject']")
    }

    async verifyMyTasksIsDispalyed(){
        await this.page.setDefaultTimeout(10000);
        expect(await this.myTasks.isVisible()).toBe(true);
    }

    async createTask(){
        await this.createTaskButton.click();

        const currentDateTime: Date = new Date();
        const currentDate: number = currentDateTime.getDate();
        const currentHours: number = currentDateTime.getHours()
        const currentMinutes: number = currentDateTime.getMinutes()
        title = `Task${currentDate}${currentHours}${currentMinutes}`
        await this.taskTitle.type(title)
        await this.confirmTaskButton.click();
        await this.addCheckList.click()
        await this.checkListInputField.type("Check list 1")
        await this.closeButton.click();
        await this.projects.click()
        await this.testProject.click();
    }

}