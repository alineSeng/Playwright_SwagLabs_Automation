import { test, expect } from '@playwright/test'
import { login } from '../Login/LoginFunctionsPage';

test.describe('Tests de connexion', () => {
    test.beforeEach(async ({ page }) => {
        // Connexion avant chaque test
        await login(page, 'standard_user', 'secret_sauce');
    });

    test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', async ({ page }) => {
        await expect(page.locator('.inventory_list')).toBeVisible();
    });
});

test.describe('TestsTestsTestsTestsTestsTestsTests ', () => {
    test.beforeEach(async ({ page }) => {
        await login(page, 'standard_user', 'secret_sauce');
    });

    test('VérifieVérifieVérifie', async ({ page }) => {
        await page.waitForSelector('.inventory_list', { state: 'visible' }); // Attendre que la liste soit visible
        await expect(page.locator('.inventory_list')).toBeVisible();
    });
});
