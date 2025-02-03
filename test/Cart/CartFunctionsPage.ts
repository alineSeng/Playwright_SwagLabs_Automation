import { Page, expect } from '@playwright/test'
import CartElementsPage from '../Cart/CartElementsPage';

const cartElementsPage = new CartElementsPage();

export async function cart(page: Page){
    await cartElementsPage.cart_Button(page).click();
}

export async function check_cart_counter(page: Page){
    await expect(cartElementsPage.counterShoppingCart(page)).toHaveText('1');
}

export async function check_quantity_product(page: Page){
    await expect(cartElementsPage.quantity(page)).toHaveText('1')
}

export async function check_price_product(page: Page){
    await expect(cartElementsPage.price(page)).toHaveText('29.99')
}