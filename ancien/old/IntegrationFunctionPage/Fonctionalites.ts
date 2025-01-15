import { Page } from "@playwright/test";

export async function login(page: Page, username: string, password: string) {
    await page.goto('/login');
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    //await page.click('button[tyep="submit"]');
    await page.locator('#login-button').click();
}

export async function logout(page: Page) {
    await page.click('.menu-button');
    await page.locator("a.btn_action.cart_button").click();
}

