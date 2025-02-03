import {Page} from '@playwright/test';                       

class CheckoutElementsPge {

    checkoutButton(page: Page){
        return page.locator('a.btn_action.checkout_button')
    }

    firstName(){
        return ('#first-name')
    }

    lastName(){
        return ('#last-name')
    }

    postalCode(){
        return ('#postal-code')
    }

    continueButton(page: Page){
        return page.locator('input.btn_primary.cart_button')
    }

    summary_quantity(page: Page){
        return page.locator('div.summary_quantity');
    }

    shipping_information(page: Page){
        return page.locator('div.summary_info_label').nth(1)
    }

    shipping_value_information(page: Page){
        return page.locator('div.summary_value_label').nth(1)
    }

}
export default CheckoutElementsPge;