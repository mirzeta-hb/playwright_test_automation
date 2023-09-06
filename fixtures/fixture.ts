import { test as base } from '@playwright/test';
import ProjectPage from '../page-objects/project-page';
import { newTab } from '../common-tasks/common-tasks';

export type Fixture  = {
    archiveTask:()=>Promise<any>

}
export const test = base.extend<Fixture>({
    archiveTask: async({}, use) =>{
        const cleanUp = async():Promise<any> => {
            const projectPage = new ProjectPage(newTab)
            await projectPage.archiveTask();
            return projectPage;
      
        }
        await  use(cleanUp)

    }
})
