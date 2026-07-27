import { expect, test } from "@playwright/test"
test("edit a lead /Playwright locator", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.getByLabel("Username", { exact: true }).fill("democsr2")
    await page.getByLabel("Password", { exact: true }).fill("crmsfa")
    await page.locator('.decorativeSubmit').click();
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.getByText("Leads", { exact: true }).first().click()
    await page.getByRole("link", { name: "Find Leads", exact: true }).click();
    await page.locator('(//input[@name="firstName"])[3]').fill("Raghavendra")
    await page.locator('//button[text()="Find Leads"]').click()
    await page.locator('//a[text()="Raghavendra"]/../../..//a').first().click();
    await page.getByRole("link", { name: "Edit", exact: true }).first().click();
    await page.locator('#updateLeadForm_companyName').fill("Qapitol Qa")
    await page.locator('#updateLeadForm_departmentName').fill("Delivery Head")
    await page.locator('#updateLeadForm_annualRevenue').fill("1500000")
    await page.locator('//textarea[@name="description"]').fill("Edited succesfully")
    await page.locator('//input[@value="Update"]').click();
    // console.log(await page.locator('#viewLead_companyName_sp').innerText());

    expect.soft(await page.locator('#viewLead_companyName_sp').innerText()).toContain("Qapitol")
    expect.soft(await page.locator('#viewLead_departmentName_sp').innerText()).toContain("Delivery")
    expect.soft(await page.locator('#viewLead_annualRevenue_sp').innerText()).toContain("1,500,000")
    const titleOfThePage = await page.title()
    console.log(titleOfThePage);
    await page.waitForTimeout(3000)




}) 
