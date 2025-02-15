import { Page, expect } from "@playwright/test";
import CheckoutElementsPage from "./CheckoutElementsPage"

const checkoutElementsPage = new CheckoutElementsPage()

export async function checkout(page: Page){

    await checkoutElementsPage.checkoutButton(page).click();
}

export async function checkoutInformation(page: Page, firstName: string, lastName: string, postalCode: string) {

    await page.fill(checkoutElementsPage.firstName(), firstName);
    await page.fill(checkoutElementsPage.lastName(), lastName);
    await page.fill(checkoutElementsPage.postalCode(), postalCode);

    await checkoutElementsPage.continueButton(page).click();

}

export async function enterCheckoutInformation(page: Page, firstName: string, lastName: string, postalCode: string) {

    await page.fill(checkoutElementsPage.firstName(), firstName);
    await page.fill(checkoutElementsPage.lastName(), lastName);
    await page.fill(checkoutElementsPage.postalCode(), postalCode);


}

export async function clickToContinue(page: Page) {
    await checkoutElementsPage.continueButton(page).click();
}

export async function check_summary_quantity_product(page: Page){
    await expect(checkoutElementsPage.summary_quantity(page)).toHaveText('1')
}

export async function check_shipping_information(page: Page){
    await expect(checkoutElementsPage.shipping_information(page)).toBeVisible();
    await expect(checkoutElementsPage.shipping_value_information(page)).toHaveText('FREE PONY EXPRESS DELIVERY!')
}