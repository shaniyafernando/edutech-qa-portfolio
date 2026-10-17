# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> ETQP-BP-01 Global Feed accessibility for guest users
- Location: automation\tests\home.spec.ts:6:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('app-article-list').first().locator('article-meta')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('app-article-list').first().locator('article-meta') with timeout 5000ms
  - waiting for locator('app-article-list').first().locator('article-meta')
  - Test ended.

```

```yaml
- navigation:
  - link "Conduit":
    - /url: /
    - img "Conduit"
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Sign in":
        - /url: /login
    - listitem:
      - link "Sign up":
        - /url: /register
- heading "Conduit" [level=1]:
  - img "Conduit"
- paragraph:
  - text: This is the
  - link "Angular frontend":
    - /url: https://github.com/realworld-apps/angular-realworld-example-app
  - text: demo from the
  - link "Realworld":
    - /url: https://github.com/realworld-apps/realworld
  - text: project. This demo is connected to a demo backend that enforces session isolation.
- list:
  - listitem:
    - link "Global Feed":
      - /url: /
- text: Loading articles...
- contentinfo:
  - link "Conduit":
    - /url: /
    - img "Conduit"
  - text: © 2026. An interactive learning project from
  - link "RealWorld OSS Project":
    - /url: https://github.com/gothinkster/realworld
  - text: . Code licensed under MIT.
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import HomePage from "../pages/home-page";
  3  | 
  4  | test.use({ storageState: { cookies: [], origins: [] } });
  5  | 
  6  | test.only('ETQP-BP-01 Global Feed accessibility for guest users', async ({ page }) =>{
  7  |     
  8  |     await page.goto("/");
  9  |     await expect(page).toHaveTitle("Conduit");
  10 |     await expect(page.getByRole("heading", { name: "Conduit" }).getByRole("img", { name: "Conduit", exact: true })).toBeVisible();
  11 |     await expect(page.getByRole("link", { name: "Global Feed" })).toHaveText("Global Feed");
  12 | 
  13 |     const homePage = new HomePage(page)
  14 |     const globalFeedTotalArticles = await homePage.getArticlePreviewCount();
  15 |     console.log("Total articles in Global Feed: ", globalFeedTotalArticles);
  16 |     expect(globalFeedTotalArticles).toBeGreaterThan(0);
  17 | 
  18 |     for (let i = 0; i < globalFeedTotalArticles; i++) {
  19 |         const { author, title, description, readMore, favoriteButton } = await homePage.getArticlePreviewElements(i);
> 20 |         expect(await author).toBeVisible();
     |                              ^ Error: expect(locator).toBeVisible() failed
  21 |         expect(await title).toBeVisible();
  22 |         expect(await description).toBeVisible();
  23 |         expect(await readMore).toBeVisible();
  24 |         expect(await favoriteButton).toBeVisible();
  25 |     }
  26 | 
  27 |     expect(await page.getByRole("link", { name: "Home" })).toBeVisible();
  28 |     expect(await page.getByRole("link", { name: "Sign in" })).toBeVisible();
  29 |     expect(await page.getByRole("link", { name: "Sign up" })).toBeVisible();
  30 |     expect(await page.getByRole("link", { name: "Settings" })).not.toBeVisible();
  31 |     expect(await page.getByRole("link", { name: "New Article" })).not.toBeVisible();
  32 | })
  33 | 
  34 | 
```