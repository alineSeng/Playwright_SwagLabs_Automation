import { Before, Given, When, Then } from '@cucumber/cucumber';
import { add_to_cart, check_AllTheThingsTShirtRed_ImageLink, check_AllTheThingsTShirtRed_Product, check_SauceLabBoltTShirt_Product, check_SauceLabsBackpack_ImageLink, check_SauceLabsBackpack_Product, check_SauceLabsBikeLight_ImageLink, check_SauceLabsBikeLight_Product, check_SauceLabsBoltTShirt_ImageLink, check_SauceLabsFleeceJacket_ImageLink, check_SauceLabsFleeceJacket_Product, check_SauceLabsOnesie_ImageLink, check_SauceLabsOnesie_Product, checkAllProducts, counter_cart, remove_from_cart, remove_from_cart_from_generalPage, } from '../Inventory/InventoryFunctionsPage';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { login } from '../Login/LoginFunctionsPage';
import './hooks';
import { features } from 'process';

let browser: Browser;
let page: Page;

Then('Verification de la liste des produits', async function () {
    await checkAllProducts(this.page);
});

Then('je vérifie le produit {string}', async function (productName) {
    switch (productName) {
        case 'SauceLabsBackpack':
            await check_SauceLabsBackpack_Product(this.page);
            break;
        case 'SauceLabsBikeLight':
            await check_SauceLabsBikeLight_Product(this.page);
            break;
        case 'SauceLabsBoltTShirt':
            await check_SauceLabBoltTShirt_Product(this.page);
            break;
        case 'SauceLabsFleeceJacket':
            await check_SauceLabsFleeceJacket_Product(this.page);
            break;
        case 'SauceLabsOnesie':
            await check_SauceLabsOnesie_Product(this.page);
            break;
        case 'AllTheThingsTShirtRed':
            await check_AllTheThingsTShirtRed_Product(this.page);
            break;
        default:
            throw new Error(`Produit inconnu: ${productName}`);
    }
});

When('the user click on SauceLabsBackpack "ADD TO CART" button', async function () {
    await add_to_cart(this.page)
});

When('the user click on SauceLabsBackpack "REMOVE" button', async function () {
    await add_to_cart(this.page)
    await remove_from_cart_from_generalPage(this.page)
    //await expect(remove_from_cart_from_generalPage).toContain("REMOVE")

});



When('1 quantity is adding to cart', async function () {
    //let compteur: void;
    //compteur = await counter_cart(this.page);
    //expect(compteur).toBe(1);

    // Attendre que le badge du panier apparaisse
    const cartBadge = this.page.locator('span.shopping_cart_badge');
    await cartBadge.waitFor({ state: 'visible' });

    // Récupérer le texte à l'intérieur du badge
    const cartCount = await cartBadge.innerText();

    // Vérifier que le badge affiche bien "1"
    expect(parseInt(cartCount)).toBe(1);
});

When('the cart should be empty', async function () {
    //await expect(remove_from_cart_from_generalPage).toContain("REMOVE")
      // Attendre que le badge du panier apparaisse
      const cartBadge = this.page.locator('span.shopping_cart_badge');
      await cartBadge.waitFor({ state: 'visible' });
  
      // Récupérer le texte à l'intérieur du badge
      const cartCount = await cartBadge.innerText();
  
      // Vérifier que le badge affiche bien "0"
      expect(parseInt(cartCount)).toBeNull();
});