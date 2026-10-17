import { Page } from '@playwright/test';

export default class SignUpPage {
    constructor(private page: Page) {}

    async enterUsername(username: string) {
        await this.page.getByPlaceholder('Username').fill(username);
    }

    async enterEmail(email: string) {
        await this.page.getByPlaceholder('Email').fill(email);
    }

    async enterPassword(password: string) {
        await this.page.getByPlaceholder('Password').fill(password);
    }

    async clickSignUpButton() {
        await this.page.getByRole('button', { name: 'Sign up' }).click();
    }
}