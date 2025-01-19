import { test, expect } from '@playwright/test'
import { login, loginFail } from '../Login/LoginFunctionsPage';

test('Test de connexion Pass', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');
});

test('Test de connexion FAIL', async ({ page }) => {
        await loginFail(page, 'faux_username', 'faux_password');
});

