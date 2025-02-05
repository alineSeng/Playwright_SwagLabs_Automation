import { Before, Given, When, Then } from '@cucumber/cucumber';
import { login, loginFail } from '../Login/LoginFunctionsPage'; // Supposons que ces fonctions sont déjà définies.
import { chromium, Browser, Page, expect } from '@playwright/test';  // Utilise cette importation pour éviter les problèmes de résolution
import './hooks';  // Importation des hooks pour initialiser la page

let browser: Browser;
let page: Page;

Given('Log in as user', async function () {
    const page = this.page;  // Utilisation de la page Playwright
    await login(page, 'standard_user', 'secret_sauce');
});

Given('Login Fail', async function () {
    // Cette étape va simuler une connexion échouée avec des identifiants invalides
    page = this.page;
    await loginFail(page, 'faux_username', 'faux_password');  // Appel de la fonction loginFail avec de mauvais identifiants
    console.log("Tentative de connexion échouée avec des identifiants invalides !");
});

Then('L\'utilisateur est redirigé vers la page d\'accueil', async function () {
    // Ici, tu peux vérifier si l'utilisateur a bien été redirigé vers la page d'accueil après une connexion réussie
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Page d\'accueil');  // Vérification du titre de la page pour valider la redirection
});

Then('Un message d\'erreur est affiché', async function () {
    // Vérifier qu'un message d'erreur s'affiche lors d'une tentative de connexion échouée
    const errorMessage = await page.locator('.error-message');  // Adaptation du sélecteur selon ton application
    expect(await errorMessage.isVisible()).toBe(true);
});
