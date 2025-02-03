import { Page, expect } from "@playwright/test";
import DeconnexionElementsPage from "./DeconnexionElementsPage";

const deconnexionElementsPage = new DeconnexionElementsPage()

export async function Deconnexion(page: Page){

    await deconnexionElementsPage.finishButton(page).click();
}

export async function thanksPage(page: Page){

    await expect(deconnexionElementsPage.thanks(page)).toBeVisible();
}