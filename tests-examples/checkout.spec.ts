import { test, expect } from '@playwright/test'
import { login } from '../test/Login/LoginFunctionsPage';
import { add_to_cart, check_SauceLabsBackpack_Product } from '../test/Inventory/InventoryFunctionsPage';
import { cart, check_price_product, check_quantity_product } from '../test/Cart/CartFunctionsPage';
import { check_shipping_information, check_summary_quantity_product, checkout, checkoutInformation } from '../test/Checkout/CheckoutFunctionsPage'
/*
test.describe('Checkout', () => {
    
    test.beforeEach(async ({ page }) => {
        await login(page, 'standard_user', 'secret_sauce');
    }); 

    test ('Checkout ', async ({page}) => {
        await add_to_cart(page);
        await cart(page);
        await checkout(page);
        await checkoutInformation(page, 'aline', 'seng', '59000');
    });
    
    test ('Checkout Owerview Confirmation ', async ({page}) => {
        await add_to_cart(page);
        await cart(page);
        await checkout(page);
        await checkoutInformation(page, 'aline', 'seng', '59000');

        await check_summary_quantity_product(page);
        await check_shipping_information(page);

        await check_SauceLabsBackpack_Product(page);

    });

    


})
    */