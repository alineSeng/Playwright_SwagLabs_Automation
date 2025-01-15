import { defineConfig } from "@playwright/test";

export default defineConfig({
    use: {
        baseURL: 'https://www.saucedemo.com/v1/', // l'url de l'appli
        browserName: 'chromium',
        headless: true,
    },
});
