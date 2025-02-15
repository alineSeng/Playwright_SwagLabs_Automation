import { Before, Given, When, Then } from '@cucumber/cucumber';
import { add_to_cart, carteBadge, carteBadge2, check_AllTheThingsTShirtRed_Product, check_SauceLabBoltTShirt_Product, check_SauceLabsBackpack_ImageLink, check_SauceLabsBackpack_Product, check_SauceLabsBikeLight_ImageLink, check_SauceLabsBikeLight_Product, check_SauceLabsBoltTShirt_ImageLink, check_SauceLabsFleeceJacket_ImageLink, check_SauceLabsFleeceJacket_Product, check_SauceLabsOnesie_ImageLink, check_SauceLabsOnesie_Product, checkAllProducts, counter_cart, productSortContainer, remove_from_cart, remove_from_cart_from_generalPage, sauceLabsBackpack_Item, sauceLabsFleeceJacket_Item, SauceLabsFleeceJacketPrice, sauceLabsOnesie_Item, SauceLabsOnesiePrice, } from '../Inventory/InventoryFunctionsPage';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { login } from '../Login/LoginFunctionsPage';
import './hooks';
import { features } from 'process';
import { time } from 'console';

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
    const cartBadge = await carteBadge(this.page); // Récupérer le locator Playwright
    const cartClick = await cartBadge.click();
    const cartCount = await cartBadge.innerText();
    expect(parseInt(cartCount)).toBe(1);
});

Then('the cart should be empty', async function () {

    const cartBadge = await carteBadge(this.page);
    const cartCount = await cartBadge.innerText();
    expect(parseInt(cartCount)).toBe(3);

});

When('the user click on the "REMOVE" button once from the detail cart page', async function () {
    await this.page.screenshot({ path: 'dropdown_clickedcart.png' });
    await remove_from_cart(this.page);
    await this.page.screenshot({ path: 'dropdown_clickedcart2.png' });
});

Then('the cart should be empty once from the detail cart page from the detail cart page', async function () {

    const cartBadge = await carteBadge2(this.page);
    const cartCount = await cartBadge.innerText();
    expect(parseInt(cartCount)).toBe(3);

});


When('the user select the filter on the "Price high to low" option', async function () {
    const productSortContainers = await productSortContainer(this.page);
    await productSortContainers.waitFor({ state: 'visible' });
    await productSortContainers.click();
    await productSortContainers.selectOption('hilo');
    await productSortContainers.click();


    // L'element d'ouvre mais ne click pas sur l'option
    //await this.page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    await this.page.screenshot({ path: 'dropdown_clicked.png' });
    
});


When('the product list should be sorted in descending order of the price', async function () {

    const firstProductTitle = await sauceLabsFleeceJacket_Item(this.page);

    await expect(firstProductTitle).toContainText('Sauce Labs Fleece Jacket', { timeout: 3000 });
    //await this.page.screenshot({ path: 'dropdown_clicked.png' });

    // SauceLabsFleeceJacket price is = $49.99
    const LabsFleeceJacketPrice = (await SauceLabsFleeceJacketPrice(this.page)).getByText('$49.99');
    await expect(LabsFleeceJacketPrice).toContainText('$49.99');

    // we can see SauceLabsBackpack in the second rank of the list
    // const secondProductTitle = await sauceLabsBackpack_Item(this.page);
    // await secondProductTitle.waitFor({ state: 'visible', timeout: 8000 })

    // await this.page.screenshot({ path: 'dropdown_clicked.png' });
    // await expect(secondProductTitle).toHaveText('Sauce Labs Backpack', { timeout: 8000 });

    // SauceLabsBackpack price is = $29.99
    // const LabsBackpackPrice = (await sauceLabsBackpack_Item(this.page)).getByText('$29.99');
    // await expect(LabsBackpackPrice).toContainText('$29.99');

});

When('the user select the filter on the "Price low to high" option', async function () {
    const productSortContainers = await productSortContainer(this.page);
    await productSortContainers.waitFor({ state: 'visible' });
    await productSortContainers.click();
    await productSortContainers.selectOption('lohi');
    await productSortContainers.click();

    //await this.page.screenshot({ path: 'dropdown_clicked.png' });
    
});

When('the product list should be sorted in ascending order of the price', async function () {
    const firstProductTitle = await sauceLabsOnesie_Item(this.page);

    await expect(firstProductTitle).toContainText('Sauce Labs Onesie', { timeout: 3000 });
    //await this.page.screenshot({ path: 'dropdown_clicked.png' });

    // SauceLabsOnesie price is = $7.99
    const SauceLabsOnesie = (await SauceLabsOnesiePrice(this.page)).getByText('$7.99');
    await expect(SauceLabsOnesie).toContainText('$7.99');
    
});



