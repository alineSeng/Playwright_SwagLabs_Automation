import { test, expect } from '@playwright/test';

test('go to url', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

test('login', async ({ page }) => {
  //login: standard_user
  //mdp: secret_sauce


  await page.goto('https://www.saucedemo.com/v1/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();


  /*
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  //await page.getByRole('heading', {name:'How to install Playwright'}).click();
  //await page.getByText('How to install Playwright');

  //test
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  */



});