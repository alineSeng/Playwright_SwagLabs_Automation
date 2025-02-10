import { Page, expect } from "@playwright/test";
import InventoryElementsPage from "./InventoryElementsPage";

const inventoryElementsPage = new InventoryElementsPage();

export async function checkAllProducts(page: Page) {
    await expect(inventoryElementsPage.inventoryList(page)).toBeVisible();
}

// -- check all imagelink of all products
export async function check_SauceLabsBackpack_ImageLink(page: Page) {
    await inventoryElementsPage.sauceLabsBackpack_Image(page);
}

export async function check_SauceLabsBikeLight_ImageLink(page: Page) {
    await inventoryElementsPage.sauceLabsBikeLight_Image(page);
}

export async function check_SauceLabsBoltTShirt_ImageLink(page: Page) {
    await inventoryElementsPage.sauceLabsBoltTShirt_Image(page);
}

export async function check_SauceLabsFleeceJacket_ImageLink(page: Page) {
    await inventoryElementsPage.sauceLabsFleeceJacket_Image(page);
}

export async function check_SauceLabsOnesie_ImageLink(page: Page) {
    await inventoryElementsPage.sauceLabsOnesie_Image(page);
}

export async function check_AllTheThingsTShirtRed_ImageLink(page: Page) {
    await inventoryElementsPage.testAllTheThingsTShirtRed_Image(page);
}

// -------------------------------
export async function check_SauceLabsBackpack_Product(page: Page) {

    await expect(inventoryElementsPage.sauceLabsBackpack_Item(page)).toBeVisible();
    await expect(inventoryElementsPage.sauceLabsBackpack_Description(page)).toContainText(inventoryElementsPage.sauceLabsBackpack_DescriptionContain());
    await inventoryElementsPage.sauceLabsBackpack_Item(page).click();

}

export async function check_SauceLabsBikeLight_Product(page: Page) {

    await expect(inventoryElementsPage.sauceLabsBikeLight_Item(page)).toBeVisible();
    await expect(inventoryElementsPage.sauceLabsBikeLight_Description(page)).toContainText(inventoryElementsPage.sauceLabsBikeLight_DescriptionContain());
    await inventoryElementsPage.sauceLabsBikeLight_Item(page).click();

}

export async function check_SauceLabBoltTShirt_Product(page: Page) {

    await expect(inventoryElementsPage.sauceLabsBoltTShirt_Item(page)).toBeVisible();
    await expect(inventoryElementsPage.sauceLabsBoltTShirt_Description(page)).toContainText(inventoryElementsPage.sauceLabsBoltTShirt_DescriptionContain());
    await inventoryElementsPage.sauceLabsBoltTShirt_Item(page).click();

}

export async function check_SauceLabsFleeceJacket_Product(page: Page) {

    await expect(inventoryElementsPage.sauceLabsFleeceJacket_Item(page)).toBeVisible();
    await expect(inventoryElementsPage.sauceLabsFleeceJacket_Description(page)).toContainText(inventoryElementsPage.sauceLabsFleeceJacket_DescriptionContain());
    await inventoryElementsPage.sauceLabsFleeceJacket_Item(page).click();

}

export async function check_SauceLabsOnesie_Product(page: Page) {

    await expect(inventoryElementsPage.sauceLabsOnesie_Item(page)).toBeVisible();
    await expect(inventoryElementsPage.sauceLabsOnesie_Description(page)).toContainText(inventoryElementsPage.sauceLabsOnesie_DescriptionContain());
    await inventoryElementsPage.sauceLabsOnesie_Item(page).click();

}

export async function check_AllTheThingsTShirtRed_Product(page: Page) {

    await expect(inventoryElementsPage.testAllTheThingsTShirtRed_Item(page)).toBeVisible();
    await expect(inventoryElementsPage.testAllTheThingsTShirtRed_Description(page)).toContainText(inventoryElementsPage.testAllTheThingsTShirtRed_DescriptionContain());
    await inventoryElementsPage.testAllTheThingsTShirtRed_Item(page).click();

}

export async function add_to_cart(page: Page) {
    await inventoryElementsPage.addToCart_Button(page);
}

export async function carteBadge(page: Page) {
    return inventoryElementsPage.carteBadge(page);
}

export async function remove_from_cart_from_generalPage(page: Page) {
    await inventoryElementsPage.remove_Button_FromGeneralProductPage(page);
}

export async function remove_from_cart(page: Page) {
    await inventoryElementsPage.remove_Button(page);
}

export async function counter_cart(page: Page) {
    await inventoryElementsPage.counterShoppingCart(page);
}

export async function productSortContainer(page: Page) {
    return inventoryElementsPage.productSortContainer(page);
}


// ----------------------

export async function sauceLabsFleeceJacket_Item(page: Page) {
    return inventoryElementsPage.sauceLabsFleeceJacket_Item(page);
}

export async function SauceLabsFleeceJacketPrice(page: Page) {
    return inventoryElementsPage.SauceLabsFleeceJacketPrice(page);
}


export async function sauceLabsBackpack_Item(page: Page) {
    return inventoryElementsPage.sauceLabsBackpack_Item(page);
}

export async function SauceLabsBackpackPrice(page: Page) {
    return inventoryElementsPage.SauceLabsBackpackPrice(page);
}