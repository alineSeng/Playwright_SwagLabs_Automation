import { test, expect } from '@playwright/test'
import { login } from '../Login/LoginFunctionsPage';
import { add_to_cart, check_SauceLabsBackpack_Product, remove_from_cart, remove_from_cart_from_generalPage } from '../Inventory/InventoryFunctionsPage';
import {cart, check_cart_counter, check_price_product, check_quantity_product} from '../Cart/CartFunctionsPage';

test.describe('Test gestion du panier', () => {
    test.beforeEach(async ({ page }) => {
        await login(page, 'standard_user', 'secret_sauce');
    });

    test ('check panier', async ({page}) => {
        await add_to_cart(page);
        await cart(page);
    });

    test ('check compteur panier', async ({page}) => {
        await add_to_cart(page);
        await check_cart_counter(page);

    });

    test ('check produit SauceLabsBackpack dans panier', async ({page}) => {
        await add_to_cart(page);
        await cart(page);
        await check_quantity_product(page);
        await check_price_product(page);

        await check_SauceLabsBackpack_Product(page);
        
    })

    test ('test retirer produit depuis la page de la liste des produits', async ({page}) => {
        await add_to_cart(page);
        await cart(page);
        await remove_from_cart_from_generalPage(page)
        
    })


    test ('test retirer le produit du panier depuis la page detail produit', async ({page}) => {
        await add_to_cart(page);
        await cart(page);

        await check_SauceLabsBackpack_Product(page);

        await remove_from_cart(page);
    })
    
});