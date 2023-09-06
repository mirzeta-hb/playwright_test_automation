import { Page } from "@playwright/test";

export let newTab;
export const getNewTab = async(page: any): Promise<Page> =>{
    newTab = await page.waitForEvent('popup');
    console.log(newTab.url())
    return newTab;
}