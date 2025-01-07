import { test, expect } from '@playwright/test';
import { assert } from 'console';

const descriptionProduit = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection." ;


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

test('process ajout produit dans panier', async({page}) =>
{
  await page.goto('https://www.saucedemo.com/v1/inventory.html');

  //go to : Sauce Labs Backpack
  await page.locator('#item_4_title_link').click();

  //verificaion de la fiche produit.
  //await expect(page.getByRole('heading', {name:'Sauce Labs Backpack'})).toBeVisible();
  //await expect(page).toHaveTitle(/Sauce Labs Backpack/);
  await expect(page.locator('div.inventory_details_name')).toBeVisible();
  await expect(page.locator('div.inventory_details_desc')).toHaveText(descriptionProduit);

  //ajouter : Sauce Labs Backpack au panier
  //await page.locator("div:has-text('ADD TO CART')").click();
  await page.locator('button.btn_primary.btn_inventory').click();

  //verificaion que le produit soit dans le panier.
  await page.locator('#shopping_cart_container').click();
  //assert page.locator(".cart-")
  await expect(page.locator('div.inventory_item_name')).toBeVisible();
  await expect(page.locator('div.inventory_item_desc')).toHaveText(descriptionProduit);
  await expect(page.locator("div.inventory_item_price")).toContainText("29.99");
  await expect(page.locator("div.cart_quantity")).toContainText('1');
  
  await page.locator('a.btn_action.checkout_button').click();
  

});

test("checkout", async({page})=>
{
  await page.goto('https://www.saucedemo.com/v1/checkout-step-one.html');
  
  await page.locator("#first-name").fill("myfirstname");
  await page.locator("#last-name").fill("mylastname");
  await page.locator("#postal-code").fill("mypostalcode");

  await page.locator("input.btn_primary.cart_button").click();


  await expect(page.locator('div.summary_value_label').nth(0)).toHaveText("SauceCard #31337");
  await expect(page.locator('div.summary_value_label').nth(1)).toHaveText("FREE PONY EXPRESS DELIVERY!");

  await page.locator("a.btn_action.cart_button").click();
  
});