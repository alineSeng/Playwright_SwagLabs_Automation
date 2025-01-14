import { test, expect } from '@playwright/test';

const descriptionProduit = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.";


test('process ajout produit dans panier', async ({ page }) => {
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