import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/"

test("should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", {name: "Sign In"}).click();

  await expect(page.getByRole("heading", {name: "Sign In"})).toBeVisible();

  await page.locator("[name=email]").fill("test13@gmail.com");
  await page.locator("[name=password]").fill("abcdefgh");

  await page.getByRole("button", {name: "Login"}).click();

  await expect(page.getByText("Login Successful")).toBeVisible()
  await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
  await expect(page.getByRole("button", {name: "Sign Out"})).toBeVisible();
});

test("should allow the user to register", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", {name: "Sign In"}).click()

  await page.getByRole("link", {name: "SignUp"}).click();

  await expect(page.getByRole("heading", {name: "Create an Account"})).toBeVisible();

  await page.locator("[name=firstname]").fill("hello");
  await page.locator("[name=lastname]").fill("world");
  await page.locator("[name=email]").fill("test16@gmail.com");
  await page.locator("[name=password]").fill("helloworld");
  await page.locator("[name=confirmpassword]").fill("helloworld");

  await page.getByRole("button", {name: "Create Account"}).click();

  await expect(page.getByText("Registration Success")).toBeVisible()
  await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
  await expect(page.getByRole("button", {name: "Sign Out"})).toBeVisible();
}) 
