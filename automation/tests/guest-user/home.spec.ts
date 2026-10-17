import { test, expect } from "@playwright/test";
import HomePage from "../../pages/home-page.ts";

test.use({ storageState: { cookies: [], origins: [] } });

test('ETQP-BP-01 Global Feed accessibility for guest users', async ({ page }) =>{
    
    await page.goto("/");
    await expect(page).toHaveTitle("Conduit");
    await expect(page.getByRole("heading", { name: "Conduit" }).getByRole("img", { name: "Conduit", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Global Feed" })).toHaveText("Global Feed");

    const homePage = new HomePage(page)
    const globalFeedTotalArticles = await homePage.getArticlePreviewCount();
    console.log("Total articles in Global Feed: ", globalFeedTotalArticles);
    expect(globalFeedTotalArticles).toBeGreaterThan(0);

    expect(await page.getByRole("link", { name: "Home" })).toBeVisible();
    expect(await page.getByRole("link", { name: "Sign in" })).toBeVisible();
    expect(await page.getByRole("link", { name: "Sign up" })).toBeVisible();
    expect(await page.getByRole("link", { name: "Settings" })).not.toBeVisible();
    expect(await page.getByRole("link", { name: "New Article" })).not.toBeVisible();
})

test("ETQP-BP-04 Guest user is redirected to sign in page when clicking favourite", async ({
  page,
}) => {
  await page.goto("/");

  // Scroll down to Global Feed and select the first article's favorite button
  const homePage = new HomePage(page);
  const { favoriteButton } = await homePage.getArticleElements(0);
  await favoriteButton.scrollIntoViewIfNeeded();
  await favoriteButton.click();
  await page.waitForURL("**/login")

  // The user is redirected to the sign in page
  await expect(page).toHaveURL("**/login");
});