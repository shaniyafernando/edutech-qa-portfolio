import { Page } from '@playwright/test';

export default class SignInPage {
    constructor(private page: Page) {}

    async enterEmail(email: string) {
        await this.page.getByPlaceholder('Email').fill(email);
    }

    async enterPassword(password: string) {
        await this.page.getByPlaceholder('Password').fill(password);
    }

    async clickSignInButton() {
        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }
}