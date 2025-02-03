import { test, expect, Page} from '@playwright/test'
import { login, loginFail } from '../Login/LoginFunctionsPage';
import * as assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

test('Test de connexion Pass', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');
});

test('Test de connexion FAIL', async ({ page }) => {
    await loginFail(page, 'faux_username', 'faux_password');
});

// Feature: Test de login

// Scenario: Test de connexion Pass
//let page : Page;
Given ('Test de connexion Pass', function() {
    let page : Page;
    login(page, 'standard_user', 'secret_sauce');
})