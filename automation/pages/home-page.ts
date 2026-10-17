import { Page } from "@playwright/test";

export default class HomePage {
  constructor(private page: Page) {}

  async getArticlePreviewCount() {
    return await this.page.locator("app-article-preview").count();
  }

  async getArticleElements(number:number) {
    const articleCard = this.page.locator("app-article-preview").nth(number);
    const avatar = await articleCard.locator(".author img");
    const author = await articleCard.locator(".author");
    const date = await articleCard.locator(".date");
    const title = await articleCard.locator("h1");
    const description = await articleCard.locator("p");
    const readMore = await articleCard.getByText("Read more...");
    const favoriteButton = await articleCard.locator(
      "button.btn-outline-primary",
    );
    const heartIcon = await favoriteButton.locator("i.ion-heart");
    return {
      articleCard,
      avatar,
      author,
      date,
      title,
      description,
      readMore,
      favoriteButton,
      heartIcon,
    };
  }

  async selectPopularTag(tagName: string) {
    const tagButton = this.page
      .locator(".tag-list")
      .getByText(tagName, { exact: true });
    await tagButton.scrollIntoViewIfNeeded();
    await tagButton.click();
  }

  async clickTab(tabName: string) {
    await this.page.getByRole("button", { name: tabName }).click();
  }
}
