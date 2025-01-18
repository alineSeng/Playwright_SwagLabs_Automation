import { Page } from "@playwright/test";

class InventoryElementsPage {

    sauceLabsBackpack_Image(page: Page) {
        return page.locator("#item_4_img_link")
    }

    sauceLabsBikeLight_Image(page: Page) {
        return page.locator("#item_0_img_link")
    }

    sauceLabsBoltTShirt_Image(page: Page) {
        return page.locator("#item_1_img_link")
    }

    sauceLabsFleeceJacket_Image(page: Page) {
        return page.locator("#item_5_img_link")
    }

    sauceLabsOnesie_Image(page: Page) {
        return page.locator("#item_2_img_link")
    }

    testAllTheThingsTShirtRed_Image(page: Page) {
        return page.locator("#item_3_img_link")
    }

    // --------------------

    sauceLabsBackpack_Item(page: Page) {
        return page.locator("div.inventory_item_name").nth(0)
    }

    sauceLabsBikeLight_Item(page: Page) {
        return page.locator("div.inventory_item_name").nth(1)
    }

    sauceLabsBoltTShirt_Item(page: Page) {
        return page.locator("div.inventory_item_name").nth(2)
    }

    sauceLabsFleeceJacket_Item(page: Page) {
        return page.locator("div.inventory_item_name").nth(3)
    }

    sauceLabsOnesie_Item(page: Page) {
        return page.locator("div.inventory_item_name").nth(4)
    }

    testAllTheThingsTShirtRed_Item(page: Page) {
        return page.locator("div.inventory_item_name").nth(5)
    }

    // --------------------

    sauceLabsBackpack_Description(page: Page) {
        return page.locator("div.inventory_item_desc").nth(0)
    }

    sauceLabsBikeLight_Description(page: Page) {
        return page.locator("div.inventory_item_name").nth(1)
    }

    sauceLabsBoltTShirt_Description(page: Page) {
        return page.locator("div.inventory_item_name").nth(2)
    }

    sauceLabsFleeceJacket_Description(page: Page) {
        return page.locator("div.inventory_item_name").nth(3)
    }

    sauceLabsOnesie_Description(page: Page) {
        return page.locator("div.inventory_item_name").nth(4)
    }

    testAllTheThingsTShirtRed_Description(page: Page) {
        return page.locator("div.inventory_item_name").nth(5)
    }

    // --------------------

    addToCart_Button(page: Page) {
        return page.locator('button.btn_primary.btn_inventory');
    }
    
    remove_Button(page: Page){
        return page.locator('button.btn_secondary.btn_inventory')
    }

    // -------------------

    cart_Button(page: Page){
        return page.locator('path')
    }

    counterShoppingCart(page: Page){
        return page.locator('span.fa-layers-counter.shopping_cart_badge')
    }



}
export default InventoryElementsPage;