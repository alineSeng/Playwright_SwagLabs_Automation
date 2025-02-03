import {Page} from '@playwright/test';

class CartElementsPage {

    cart_Button(page: Page){
        return page.locator('path')
    }
    
    counterShoppingCart(page: Page){
        return page.locator('span.fa-layers-counter.shopping_cart_badge')
    }

    quantity(page: Page){
        return page.locator('div.cart_quantity')
    }

    price(page: Page){
        return page.locator('div.inventory_item_price')
    }


}
export default CartElementsPage;