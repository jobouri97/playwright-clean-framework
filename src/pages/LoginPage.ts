import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByTestId('username');
        this.password = page.getByTestId('password');
        this.loginBtn = page.getByTestId('login-button');
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(user: { username: string; password: string }) {
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.loginBtn.click();
    }

    async assertOnLoginPage() {
        await expect(this.loginBtn).toBeVisible();
    }
}