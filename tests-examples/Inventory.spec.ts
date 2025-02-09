import { test, expect } from '@playwright/test'
import { login } from '../test/Login/LoginFunctionsPage';
import { add_to_cart, check_AllTheThingsTShirtRed_ImageLink, check_AllTheThingsTShirtRed_Product, check_SauceLabBoltTShirt_Product, check_SauceLabsBackpack_ImageLink, check_SauceLabsBackpack_Product, check_SauceLabsBikeLight_ImageLink, check_SauceLabsBikeLight_Product, check_SauceLabsBoltTShirt_ImageLink, check_SauceLabsFleeceJacket_ImageLink, check_SauceLabsFleeceJacket_Product, check_SauceLabsOnesie_ImageLink, check_SauceLabsOnesie_Product, checkAllProducts, remove_from_cart, } from '../test/Inventory/InventoryFunctionsPage';

/*
test.describe('Test verification des produits', () => {
    test.beforeEach(async ({ page }) => {
        await login(page, 'standard_user', 'secret_sauce');
    });

    test('checker la liste des produits', async ({ page }) => {
        await checkAllProducts(page);
    })
    
    test('checker le produit SauceLabsBackpack', async ({ page }) => {
        await check_SauceLabsBackpack_Product(page);
    })

    test('checker le produit SauceLabsBikeLight', async ({ page }) => {
        await check_SauceLabsBikeLight_Product(page);
    })

    test('checker le produit SauceLabsBoltTShirt', async ({ page }) => {
        await check_SauceLabBoltTShirt_Product(page);
    })

    test('checker le produit SauceLabsFleeceJacket', async ({ page }) => {
        await check_SauceLabsFleeceJacket_Product(page);
    })

    test('checker le produit SauceLabsOnesie', async ({ page }) => {
        await check_SauceLabsOnesie_Product(page);
    })

    test('checker le produit AllTheThingsTShirtRed', async ({ page }) => {
        await check_AllTheThingsTShirtRed_Product(page);
    })

    // -----------------

    test('checker le lien image de SauceLabsBackpack', async ({ page }) => {
        await check_SauceLabsBackpack_ImageLink(page);
    })

    test('checker le lien image de SauceLabsBikeLight', async ({ page }) => {
        await check_SauceLabsBikeLight_ImageLink(page);
    })

    test('checker le lien image de SauceLabsBoltTShirt', async ({ page }) => {
        await check_SauceLabsBoltTShirt_ImageLink(page);
    })

    test('checker le lien image de SauceLabsFleeceJacket', async ({ page }) => {
        await check_SauceLabsFleeceJacket_ImageLink(page);
    })

    test('checker le lien image de SauceLabsOnesie', async ({ page }) => {
        await check_SauceLabsOnesie_ImageLink(page);
    })

    test('checker le lien image de AllTheThingsTShirtRed', async ({ page }) => {
        await check_AllTheThingsTShirtRed_ImageLink(page);
    })

    // ------------- ajput au panier

    test("checker l'ajout au panier", async ({page}) => {
        await add_to_cart(page);
    })

    test("checker la suppression au panier", async ({page}) => {
        await add_to_cart(page);
        await remove_from_cart(page);
    })

});


*/