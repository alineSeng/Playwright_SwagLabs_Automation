import { Given, When } from "@cucumber/cucumber";
import { add_to_cart, goToCart } from "../Inventory/InventoryFunctionsPage";
import { checkout, clickToContinue, enterCheckoutInformation } from "../Checkout/CheckoutFunctionsPage";
import { Deconnexion, thanksPage } from "../Deconnexion/DeconnexionFunctionsPage";

When('the user has added items selected to the cart', async function () {
   await add_to_cart(this.page)
});

When('the user click on the cart icon', async function () {
    (await goToCart(this.page)).click()
    
    await this.page.screenshot({ path: 'dropdown_clicked1.png' });
});

When('the user click on the "Checkout" button', async function () {
    await checkout(this.page)
    //await this.page.screenshot({ path: 'dropdown_clicked.png' });
});

When('the user enter his firstname "Line", his last name "Sg", and his postal code "59000"', async function () {
    await enterCheckoutInformation(this.page, "Aline", "Sg", "59000" )
    await this.page.screenshot({ path: 'dropdown_clicked2.png' });
});

When('the user click on "Continue"', async function () {
   await clickToContinue(this.page)
});

When('the user click on "Finish"', async function () {
    await Deconnexion(this.page)
});

When('a confirmation message "Thank you for your order!" should be displayed', async function () {
    await thanksPage(this.page)
 });