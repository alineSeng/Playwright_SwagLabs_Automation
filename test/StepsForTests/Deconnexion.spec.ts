import { test, expect } from '@playwright/test'
import { login } from '../Login/LoginFunctionsPage';
import { add_to_cart } from '../Inventory/InventoryFunctionsPage'
import { cart } from '../Cart/CartFunctionsPage'
import { checkout, checkoutInformation } from '../Checkout/CheckoutFunctionsPage'
import { Deconnexion, thanksPage } from '../Deconnexion/DeconnexionFunctionsPage'
/*

test.describe('Deconnexion', () => {
    
    test.beforeEach(async ({ page }) => {
        await login(page, 'standard_user', 'secret_sauce');
    }); 

    test ('Deconnexion ', async ({page}) => {
        await add_to_cart(page);
        await cart(page);
        await checkout(page);
        await checkoutInformation(page, 'aline', 'seng', '59000');

        await Deconnexion(page);
        await thanksPage(page);
        
    });
    
  

    


})*/