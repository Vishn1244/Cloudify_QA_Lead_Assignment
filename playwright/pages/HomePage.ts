import { Page, Locator, expect } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly welcomeMessage: Locator;
    readonly productsLink: Locator;
    readonly cartButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.welcomeMessage = page.locator('.title');
        this.productsLink = page.locator('#inventory_container');
        this.cartButton = page.locator('.shopping_cart_link');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    async verifyHomePageLoaded() {
        await expect(this.welcomeMessage).toBeVisible();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async clickProducts() {
        await this.productsLink.click();
    }

    async logout() {
        await this.logoutButton.click();
    }
}