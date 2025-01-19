import { test, expect } from '@playwright/test'
import { login } from '../Login/LoginFunctionsPage';
import { add_to_cart } from '../Inventory/InventoryFunctionsPage';
import {cart} from '../Cart/CartFunctionsPage';

test.describe('Test verification des produits', () => {
    test.beforeEach(async ({ page }) => {
        await login(page, 'standard_user', 'secret_sauce');
    });

    test ('test panier', async ({page}) => {
        await add_to_cart(page);
        await cart(page);
    });

});