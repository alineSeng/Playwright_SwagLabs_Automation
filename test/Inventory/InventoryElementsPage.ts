import { Page } from "@playwright/test";

class InventoryElementsPage {

    inventoryList(page: Page) {
        return page.locator('.inventory_list')
    }

    // --------------------

    sauceLabsBackpack_Image(page: Page) {
        return page.click('#item_4_img_link', { force: true });

    }

    sauceLabsBikeLight_Image(page: Page) {
        return page.click("#item_0_img_link", { force: true });
    }

    sauceLabsBoltTShirt_Image(page: Page) {
        return page.click("#item_1_img_link", { force: true })
    }

    sauceLabsFleeceJacket_Image(page: Page) {
        return page.click("#item_5_img_link", { force: true })
    }

    sauceLabsOnesie_Image(page: Page) {
        return page.click("#item_2_img_link", { force: true })
    }

    testAllTheThingsTShirtRed_Image(page: Page) {
        return page.click("#item_3_img_link", { force: true })
    }

    // --------------------

    sauceLabsBackpack_Item(page: Page) {
        return page.locator("#item_4_title_link")
    }

    sauceLabsBikeLight_Item(page: Page) {
        return page.locator("div.inventory_item_name").nth(1)
    }

    sauceLabsBoltTShirt_Item(page: Page) {
        return page.locator("div.inventory_item_name").nth(2)
    }

    sauceLabsFleeceJacket_Item(page: Page) {
        return page.locator('#item_5_title_link');
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
        return page.locator("div.inventory_item_desc").nth(1)
    }

    sauceLabsBoltTShirt_Description(page: Page) {
        return page.locator("div.inventory_item_desc").nth(2)
    }

    sauceLabsFleeceJacket_Description(page: Page) {
        return page.locator("div.inventory_item_desc").nth(3)
    }

    sauceLabsOnesie_Description(page: Page) {
        return page.locator("div.inventory_item_desc").nth(4)
    }

    testAllTheThingsTShirtRed_Description(page: Page) {
        return page.locator("div.inventory_item_desc").nth(5)
    }

    // --------------------

    sauceLabsBackpack_DescriptionContain() {
        return ("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.")
    }

    sauceLabsBikeLight_DescriptionContain() {
        return "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
    }

    sauceLabsBoltTShirt_DescriptionContain() {
        return "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
    }

    sauceLabsFleeceJacket_DescriptionContain() {
        return "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
    }

    sauceLabsOnesie_DescriptionContain() {
        return "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
    }

    testAllTheThingsTShirtRed_DescriptionContain() {
        return "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
    }

    // --------------------

    addToCart_Button(page: Page) {
        return page.click('button.btn_primary.btn_inventory');
    }

    carteBadge(page: Page) {
        return page.locator('span.shopping_cart_badge');
    }

    remove_Button_FromGeneralProductPage(page: Page) {
        return page.click('button.btn_primary.btn_inventory');
    }

    remove_Button(page: Page) {
        return page.click('button.btn_secondary.btn_inventory', { force: true });
    }


    // -------------------

    cart_Button(page: Page) {
        return page.locator('path')
    }

    counterShoppingCart(page: Page) {
        return page.locator('span.shopping_cart_badge');
    }

     // -------------------

    productSortContainer(page: Page) {
        return page.locator("select.product_sort_container");
    }
    
    // -------------------

    SauceLabsFleeceJacketPrice(page: Page) {
        return page.locator("div.inventory_item_price");
    }

    SauceLabsBackpackPrice(page: Page) {
        return page.locator("div.inventory_item_price");
    }

}
export default InventoryElementsPage;