import { test, expect } from '@playwright/test'
import { login } from '../Login/LoginFunctionsPage';
import { add_to_cart } from '../Inventory/InventoryFunctionsPage';
import { cart } from '../Cart/CartFunctionsPage';
import { checkout, checkoutInformation } from '../Checkout/CheckoutFunctionsPage'

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
    

    


})