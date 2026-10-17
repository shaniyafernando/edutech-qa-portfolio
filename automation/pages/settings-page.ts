import { Page } from "@playwright/test";

export default class SettingsPage {
    constructor(private page: Page) {}

    async clickLogoutButton() {
        await this.page.getByRole("button", { name: "Or click here to logout." }).click();
    }
}