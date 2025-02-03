import { expect, Page } from "@playwright/test";
import LoginElementsPage from "./LoginElementsPage";  

const loginElementsPage = new LoginElementsPage();

export async function login(page: Page, username: string, password: string) {
    await page.goto('https://www.saucedemo.com/v1/');
    
    await page.fill(loginElementsPage.username(), username);
    await page.fill(loginElementsPage.password(), password);
    await page.click(loginElementsPage.loginButton());

}

export async function loginFail(page: Page, username: string, password: string) {
    await page.goto('https://www.saucedemo.com/v1/');
    
    await page.fill(loginElementsPage.username(), username);
    await page.fill(loginElementsPage.password(), password);
    await page.click(loginElementsPage.loginButton());
    await expect(page.locator(loginElementsPage.loginErrorButton())).toBeVisible();

}

