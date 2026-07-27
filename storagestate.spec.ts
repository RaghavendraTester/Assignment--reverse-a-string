

import { chromium, test } from "@playwright/test";

test("Work with Playwright Locator", async ({ page }) => {

  await page.goto("https://login.salesforce.com/?locale=in")

  //

  await page.locator('#gidr-email-log-in-button').click();

  await page.locator('#identifier-11').fill("kulkarnirs180397@gmail.com")

  await page.locator('//button[text()="Continue"]').click();


  //fill("kulkarnirs180397@gmail.com")

  await page.locator('#password-14').fill("2sd15Me072@");

  await page.getByRole("button", { name: "Log In" }).click();

  await page.waitForTimeout(5000);

  await page.locator('//button[@title="App Launcher"]').click(); // home page

  //await page.waitForTimeout(6000)

  //Save the cookies + localstorage from the the application tab in dev tool --> Local Storage

  await page.context().storageState({ path: "Data/login_salesforce.json" })



})