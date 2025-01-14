import { test, expect } from '@playwright/test';

test("checkout", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/checkout-step-one.html');
  
    await page.locator("#first-name").fill("myfirstname");
    await page.locator("#last-name").fill("mylastname");
    await page.locator("#postal-code").fill("mypostalcode");
    await page.locator("input.btn_primary.cart_button").click();
  
    await expect(page.locator('div.summary_value_label').nth(0)).toHaveText("SauceCard #31337");
    await expect(page.locator('div.summary_value_label').nth(1)).toHaveText("FREE PONY EXPRESS DELIVERY!");
  
    await page.locator("a.btn_action.cart_button").click();
  
  });