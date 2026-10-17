import { test, expect } from "@playwright/test";
import Navigation from "../utils/navigation";
import testUser from "../data/test-user.json";
import SignInPage from "../pages/sign-in-page";
import SettingsPage from "../pages/settings-page";
import SignUpPage from "../pages/sign-up-page";

test.use({ storageState: { cookies: [], origins: [] } });

[
  { email: "email@111.222.333.44444" },
  { email: "email.@example.com" },
  { email: "plainaddress" },
  { email: "@example.com" },
].forEach(({ email }) => {
  test("ETQP-AUTH-03 Invalid login with incorrect email: "+ email, async ({ page }) => {
    await page.goto("/login");

    // Fill in the login form
    const signInPage = new SignInPage(page);
    await signInPage.enterEmail(email);
    await signInPage.enterPassword(testUser.password);
    await signInPage.clickSignInButton();

    await expect(page.getByText("credentials invalid")).toBeVisible();
    expect(page.url()).toBe("https://demo.realworld.show/login");
    console.log("page url: ", page.url());
  });
});

test("ETQP-AUTH-04 Invalid login with incorrect password", async ({ page }) => {
  await page.goto("/login");

  // Fill in the login form
  const signInPage = new SignInPage(page);
  await signInPage.enterEmail(testUser.email);
  await signInPage.enterPassword("incorrect password");
  await signInPage.clickSignInButton();

  await expect(page.getByText("credentials invalid")).toBeVisible();
  expect(page.url()).toBe("https://demo.realworld.show/login");
  console.log("page url: ", page.url());
});

test("ETQP-AUTH-05 Secure logout", async ({ page }) => {
  await page.goto("**/");
  await page.getByRole("link", { name: "Settings" }).click({timeout: 1000});
  await page.waitForURL("**/settings");

  const settingsPage = new SettingsPage(page);
  await settingsPage.clickLogoutButton();

  await page.waitForURL("**/");
  expect(page.url()).toBe("https://demo.realworld.show");
  console.log("page url: ", page.url());
});

test.fail("ETQP-AUTH-06 New account registration with duplicate email", async ({
  page,
}) => {
  await page.goto("/register");

  // Fill in the registration form
  const signUpPage = new SignUpPage(page);
  await signUpPage.enterUsername(testUser.username);
  await signUpPage.enterEmail(testUser.email);
  await signUpPage.enterPassword(testUser.password);
  await signUpPage.clickSignUpButton();

  await expect(page.getByText("credentials invalid")).toBeVisible();
  expect(page.url()).toBe("https://demo.realworld.show/register");
  console.log("page url: ", page.url());
});

[
  { password: testUser.email },
  { password: testUser.username },
  { password: "password" },
  { password: "password123" },
  { password: "123456" },
  { password: "admin" },
].forEach(({ password }) => {
  test.fail("ETQP-AUTH-07 Register with insecure password: "+ password, async ({ page }) => {
    await page.goto("/register");

    // Fill in the registration form
    const signUpPage = new SignUpPage(page);
    await signUpPage.enterUsername(testUser.username);
    await signUpPage.enterEmail(testUser.email);
    await signUpPage.enterPassword(password);
    await signUpPage.clickSignUpButton();

    await expect(page.getByText("credentials invalid")).toBeVisible();
    expect(page.url()).toBe("https://demo.realworld.show/register");
    console.log("page url: ", page.url());
  });
});
