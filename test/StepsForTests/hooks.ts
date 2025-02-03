import { Before, After, setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';  // Utilise cette importation pour éviter les problèmes de résolution

// Définir une interface pour `this`
interface World {
    page: Page | null;
    browser: Browser | null;
}

// Passer l'interface à `setWorldConstructor`
setWorldConstructor(function (this: World) {
    this.browser = null;
    this.page = null;
});

// Hook avant chaque scénario pour initialiser la page Playwright
Before(async function (this: World) {
    const browser: Browser = await chromium.launch(); // Lance un navigateur Chromium
    const page: Page = await browser.newPage(); // Ouvre une nouvelle page
    this.page = page; // Assigne la page à `this.page` pour l'utiliser dans les steps
    this.browser = browser; // Assigne le navigateur à `this.browser`
});

// Hook après chaque scénario pour fermer la page et le navigateur
After(async function (this: World) {
    if (this.page) {
        await this.page.close(); // Ferme la page après chaque test
    }
    if (this.browser) {
        await this.browser.close(); // Ferme le navigateur après chaque test
    }
});
