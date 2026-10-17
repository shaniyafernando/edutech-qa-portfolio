import { test as setup, expect } from "@playwright/test";
import Navigation from "../utils/navigation";
import SignInPage from "../pages/sign-in-page";
import testUser from "../data/test-user.json";
import SignUpPage from "../pages/sign-up-page";

const authFile = "playwright/.auth/user.json";

setup.skip("ETQP-AUTH-01 Registration", async ({ page }) => {
  await page.goto("/");

  // Navigate to Sign Up page
  const navigation = new Navigation(page);
  await navigation.to("Sign up");
  await page.waitForURL("**/register");
  console.log("page url: ", page.url());

  // Fill in the registration form
  const signUpPage = new SignUpPage(page);
  await signUpPage.enterUsername(testUser.username);
  await signUpPage.enterEmail(testUser.email);
  await signUpPage.enterPassword(testUser.password);
  await signUpPage.clickSignUpButton();

  // Navigate to Home page and verify successful registration
  await page.waitForURL("**/");
  console.log("page url: ", page.url());

  // Verify successful registration
  expect(await page.getByRole("link", { name: "Settings" })).toBeVisible();
  expect(await page.getByRole("link", { name: "New Article" })).toBeVisible();
  await page.context().storageState({ path: authFile });
});

setup.skip("ETQP-AUTH-02 Valid login", async ({ page }) => {
  await page.goto("/");

  // Navigate to Sign Up page
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.waitForURL("**/login");
  console.log("page url: ", page.url());

  // Fill in the login form
  const signInPage = new SignInPage(page);
  await signInPage.enterEmail(testUser.email);
  await signInPage.enterPassword(testUser.password);
  await signInPage.clickSignInButton();
  await page.waitForURL("**/");
  expect(page.url()).toBe("https://demo.realworld.show/");
  console.log("page url: ", page.url());
  expect(await page.getByRole("link", { name: "Sign in" })).not.toBeVisible();
  expect(await page.getByRole("link", { name: "Sign up" })).not.toBeVisible();

  await page.context().storageState({ path: authFile });
});
