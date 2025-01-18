import { Page } from "@playwright/test";
import InventoryElementsPage from "./InventoryElementsPage";

const inventoryElementsPage = new InventoryElementsPage();

export async function checkProducts(page: Page){
    await page.goto('/https://www.saucedemo.com/v1/');

    await inventoryElementsPage.sauceLabsBackpack_Image(page).click();
    await inventoryElementsPage.sauceLabsBikeLight_Image(page).click();
    await inventoryElementsPage.sauceLabsBoltTShirt_Image(page).click();
    await inventoryElementsPage.sauceLabsFleeceJacket_Image(page).click();
    await inventoryElementsPage.sauceLabsOnesie_Image(page).click();
    await inventoryElementsPage.testAllTheThingsTShirtRed_Image(page).click();

    await inventoryElementsPage.sauceLabsBackpack_Item(page).click();
    await inventoryElementsPage.sauceLabsBikeLight_Item(page).click();
    await inventoryElementsPage.sauceLabsBoltTShirt_Item(page).click();
    await inventoryElementsPage.sauceLabsFleeceJacket_Item(page).click();
    await inventoryElementsPage.sauceLabsOnesie_Item(page).click();
    await inventoryElementsPage.testAllTheThingsTShirtRed_Item(page).click();
    

}

