import { test, expect } from '@playwright/test';
import VariableElements from "./variable.spec"
const variableElements = new VariableElements();

//variableElements.descriptionProduit()

//const descriptionProduit = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.";
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  
});

test('process ajout produit dans panier', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/inventory.html');

  //go to : Sauce Labs Backpack
  await page.locator('#item_4_title_link').click();

  //verificaion de la fiche produit.
  //await expect(page.getByRole('heading', {name:'Sauce Labs Backpack'})).toBeVisible();
  //await expect(page).toHaveTitle(/Sauce Labs Backpack/);
  await expect(page.locator('div.inventory_details_name')).toBeVisible();
  await expect(page.locator('div.inventory_details_desc')).toHaveText(variableElements.descriptionProduit());

  //ajouter : Sauce Labs Backpack au panier
  //await page.locator("div:has-text('ADD TO CART')").click();
  await page.locator('button.btn_primary.btn_inventory').click();

  //verificaion que le produit soit dans le panier.
  await page.locator('#shopping_cart_container').click();
  //assert page.locator(".cart-")
  await expect(page.locator('div.inventory_item_name')).toBeVisible();
  await expect(page.locator('div.inventory_item_desc')).toHaveText(variableElements.descriptionProduit());
  await expect(page.locator("div.inventory_item_price")).toContainText("29.99");
  await expect(page.locator("div.cart_quantity")).toContainText('1');

  await page.locator('a.btn_action.checkout_button').click();


});

