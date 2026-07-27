/// <reference types="node"/>
import { expect, test } from "@playwright/test"
import path from "path"

test("Upload file validation on Salesforce application", async ({ page }) => {
    await page.goto("https://orgfarm-27ca235f32-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome") // 
    await page.waitForTimeout(3000)
    await page.locator('//button[@title="App Launcher"]').click();
    await page.getByRole("button", { name: "View All Applications", exact: true }).click();
    await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Accounts")
    await page.locator('//mark[text()="Accounts"]').click();
    await page.locator('//div[@title="New"]').click()
    await page.locator('//input[@name="Name"]').fill("Personal")
    await page.locator('//button[@aria-label="Rating"]').click()
    await page.locator('//span[text()="Warm"]').first().click()
    await page.locator('//button[@aria-label="Type"]').click()
    await page.locator('//span[text()="Prospect"]').first().click()
    await page.locator('//button[@aria-label="Ownership"]').click()
    await page.locator('//span[text()="Public"]').first().click()
    await page.locator('//button[@aria-label="Industry"]').click()
    await page.locator('//span[text()="Banking"]').first().click()
    await page.getByRole('button', { name: "Save", exact: true }).click();
    const file = await Promise.all([page.waitForEvent("filechooser"), page.locator('//span[text()="Upload Files"]').first().click()])
    const fUpload = file[0]
    await fUpload.setFiles(path.join(__dirname, "C:\PlayWright Workspace\HomeAssignment\Data\Raghavendra.png"))
    await page.waitForTimeout(3000)
})