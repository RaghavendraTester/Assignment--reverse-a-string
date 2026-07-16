import { expect, test } from "@playwright/test";


test.use({storageState:"Data/login_salesforce.json"})

test("Create Lead and Verify the created lead name", async ({ page }) => {

    await page.goto("https://orgfarm-27ca235f32-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome") // 

    await page.locator('//button[@title="App Launcher"]').click(); // home page

    await page.waitForTimeout(2000)
 
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.waitForTimeout(2000)

    await page.getByPlaceholder("Search apps or items...",{exact:true}).first().fill("Leads");
    await page.waitForTimeout(2000)

    await page.locator('//mark[text()="Leads"]').click();
    await page.waitForTimeout(2000)

    await page.locator('//button[text()="New"]').click();
    await page.waitForTimeout(2000)

    await page.locator('//input[@placeholder="Last Name"]').fill("Kulkarni")
    await page.waitForTimeout(2000)

    await page.locator('//input[@name="Company"]').fill("Qapitol QA")
    await page.waitForTimeout(2000)

    await page.locator('//button[text()="Save"]').click();
    await page.waitForTimeout(2000)

    const createdLeadName= await page.locator('//slot[@name="primaryField"]').innerText();
    await page.waitForTimeout(2000)

    console.log(createdLeadName);
    

   
    await expect.soft(createdLeadName).toBe("Kulkarni")
    




    //slot[@name="primaryField"] Mr. Kulkarni

//Search apps or items... getPlaceholder
//mark[text()="Leads"]

//button[text()="New"]
//button[@name="salutation"]
//input[@placeholder="Last Name"]
//input[@name="Company"]
//button[text()="Save"]

})