import { test } from "../fixtures/fixture"
import HomePage from "../page-objects/home-page";
import LoginPage from "../page-objects/login-page";
import { useremail } from "../common-data-sets/common-data";
import { password } from "../common-data-sets/common-data";
import MeisterTask from "../page-objects/meister-tasks-home-page";
import { getNewTab, newTab } from "../common-tasks/common-tasks";
import ProjectPage from "../page-objects/project-page";

test.describe("Min meister task creations", async() =>{
    test("Create Task and update it's state", async({page}) => {
         const homePage = new HomePage(page);
         await homePage.homePageGoto();
         await homePage.checkHomePageTitle();
         await homePage.navigateToTasks();
    
        
         const currentURL = await page.url()
         console.log(currentURL)
         await getNewTab(page);
         const tasksLoginPage =  new LoginPage(newTab);
         await tasksLoginPage.clickLoginButton();
         await tasksLoginPage.loginMeisterTask(useremail, password)

         const meisterTask= new MeisterTask(newTab)
         await meisterTask.verifyMyTasksIsDispalyed();
         await meisterTask.createTask();

         const projectPage = new ProjectPage(newTab)
         await projectPage.verifyTaskIsCreated();

    })

test.afterEach(async ({archiveTask}) => {
    await archiveTask()
})



})