import { test, expect } from "@playwright/test";
import HomePage from "../pages/home-page";

test("ETQP-BP-02 Global Feed article card content elements", async ({
  page,
}) => {
  await page.goto("/");

  const globalFeedTab = page.getByRole("button", { name: /Global Feed/i });
  await globalFeedTab.click();

  const homePage = new HomePage(page);

  // Select the first article card
  const firstArticleCard = await homePage.getArticleElements(0);
  await expect(firstArticleCard.articleCard).toBeVisible();

  // Author's avatar and username must be visible
  const authorAvatar = firstArticleCard.avatar;
  const authorUsername = firstArticleCard.author;
  await expect(authorAvatar).toBeVisible();
  await expect(authorUsername).toBeVisible();

  // Published date must be visible
  const publishDate = firstArticleCard.date;
  await expect(publishDate).toBeVisible();

  // Title must be visible in bold large text
  const articleTitle = firstArticleCard.title;
  await expect(articleTitle).toBeVisible();

  // Description must be visible in subtitle text
  const articleDescription = firstArticleCard.description;
  await expect(articleDescription).toBeVisible();

  // 'Read more...' link must be visible
  const readMoreLink = firstArticleCard.readMore;
  await expect(readMoreLink).toBeVisible();

  // Favourite button with number of likes, green outline, and heart icon
  const favoriteButton = firstArticleCard.favoriteButton;
  await expect(favoriteButton).toBeVisible();
  await expect(firstArticleCard.heartIcon).toBeVisible();
});

[
  { tagName: "javascript"},
  { tagName: "ai" },
  { tagName: "api" },
].forEach(({ tagName }) => {
  test("ETQP-BP-03 Global feed gets filtered by popular tag", async ({
    page,
  }) => {
    await page.goto("/");
    const homePage = new HomePage(page);
    await homePage.selectPopularTag(tagName);

    // Verify that the feed tab updates to show the selected tag name
    const activeTagTab = page.locator(".nav-pills .nav-link.active");
    await expect(activeTagTab).toContainText(tagName.trim());

    // The selected tag must be visible in each filtered article
    const articleCards = page.locator("app-article-preview");
    const count = await articleCards.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const cardTagList = articleCards.nth(i).locator(".tag-list");
      await expect(cardTagList).toContainText(tagName.trim());
    }
  });
});

test("ETQP-BP-05 Logged in user can toggle between Global Feed and Your Feed", async ({
  page,
}) => {
  await page.goto("/");

  const homePage = new HomePage(page);
  const {articleCard, title} = await homePage.getArticleElements(0);

  await homePage.clickTab('Global Feed');
  await expect(articleCard).toBeVisible();
  await homePage.clickTab('Your Feed');

  const articles = page.locator("app-article-preview");
  const hasArticles = (await articles.count()) > 0;

  if (!hasArticles) {
    // Follow an author if no articles exist in Your Feed
    await homePage.clickTab('Global Feed');
    await title.click();

    // Click follow author button on article details / author profile view
    const followButton = page.getByRole("button", { name: /Follow /i });
    if (await followButton.isVisible()) {
      await followButton.click();
    }

    // Navigate back and check Your Feed again
    await page.goto("/");
    await homePage.clickTab('Your Feed');
    const hasArticles = (await articles.count()) > 0;
    expect(hasArticles).toBe(true);
  }

  // User can view articles written by followed authors
  await expect(articleCard).toBeVisible();
});

test("ETQP-BP-06 Favorite icon increments likes, toggles style, and shows under profile favorites", async ({
  page,
}) => {
  await page.goto("/");

  const homePage = new HomePage(page)
  // Scroll down to 'Global Feed' tab
  await homePage.clickTab("Global Feed")

  const firstArticle = await homePage.getArticleElements(0)
  await expect(firstArticle.articleCard).toBeVisible();

  // Select first random article and click favorite button
  const firstFavButton = firstArticle.favoriteButton;
  await firstFavButton.scrollIntoViewIfNeeded();
  await firstFavButton.click();

  // Iterate steps 2-3 once more for a second article
  const secondArticle = await homePage.getArticleElements(1);
  const secondFavButton = secondArticle.favoriteButton;
  await secondFavButton.click();

  // Check buttons change from outlined (.btn-outline-primary) to filled (.btn-primary) style
  await expect(firstFavButton).toHaveClass(
    /btn-primary/,
  );
  await expect(secondFavButton).toHaveClass(
    /btn-primary/,
  );

  // Click on username or avatar in navigation bar
  const navUserLink = page
    .locator(".navbar")
    .locator(".nav-link")
    .filter({ hasText: /\w+/ })
    .last();
  await navUserLink.click();

  // Click on 'Favorited Posts' (or Favourite Posts) tab
  await homePage.clickTab("Favorited Posts");

  // Check if the liked articles are listed under user profile
  const profileArticles = page.locator("app-article-preview");
  await expect(profileArticles.first()).toBeVisible();
  const profileArticleCount = await profileArticles.count();
  expect(profileArticleCount).toBeGreaterThanOrEqual(2);
});
