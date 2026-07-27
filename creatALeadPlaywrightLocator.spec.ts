import { expect, test } from "@playwright/test"
test("Create A Lead", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.getByLabel("Username", { exact: true }).fill("democsr2")
    await page.getByLabel("Password", { exact: true }).fill("crmsfa")
    await page.locator('.decorativeSubmit').click();
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.getByText("Leads", { exact: true }).first().click()
    await page.getByText("Create Lead", { exact: true }).first().click()
    await page.locator('#createLeadForm_companyName').fill("Testleaf")
    await page.locator('#createLeadForm_firstName').fill("Raghavendra")
    await page.locator('#createLeadForm_lastName').fill("Kulkarni")
    await page.locator('#createLeadForm_personalTitle').fill("Mr.")
    await page.locator('#createLeadForm_generalProfTitle').fill("Software test Engnieer")
    await page.locator('#createLeadForm_departmentName').fill("Delivery")
    await page.locator('#createLeadForm_annualRevenue').fill("1000000")
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("6363844256")
    await page.getByRole("button", { name: "Create Lead", exact: true }).click()
    const titleOfThePage = await page.title()
    console.log(titleOfThePage);
    const comName = await page.locator("#viewLead_companyName_sp").innerText();
    expect.soft(comName).toContain("Testleaf")
    expect.soft(await page.locator('#viewLead_firstName_sp').innerText()).toBe("Raghavendra")
    expect.soft(await page.locator('#viewLead_lastName_sp').innerText()).toBe("Kulkarni")
    expect.soft(await page.locator('#viewLead_statusId_sp').innerText()).toBe("Assigned")
    await page.waitForTimeout(2000)



})