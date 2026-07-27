import { expect, test } from "@playwright/test";


test.use({ storageState: "Data/login_salesforce.json" })

test("Skip Login using the saved storage credentials/json file", async ({ page }) => {

    await page.goto("https://orgfarm-27ca235f32-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome") // 
    await page.waitForTimeout(3000)
    const titleOfthePage=await page.title()
    console.log(titleOfthePage);
    expect.soft(titleOfthePage).toBe("Lightning Experience | Salesforce")
    const urlOfThePage=await page.url();
    console.log(urlOfThePage);
    expect.soft(urlOfThePage).toBe("https://orgfarm-27ca235f32-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
  //  page.waitForEvent("domcontentloaded")
    page.waitForTimeout(8000)
    await page.locator('//button[@title="App Launcher"]').click(); // home page
   // await page.locator('//div[@class="slds-r6"]').click();
    await page.getByText("View All",{exact:true}).click();
    await page.getByPlaceholder('Search apps or items...',{exact:true}).fill("Service")
     await page.waitForTimeout(3000)
    await page.locator('//p[@role="presentation"]').nth(1).click()
    await page.waitForTimeout(3000)
    await page.locator('//span[text()="Accounts"]').first().click()
    await page.getByTitle("New",{exact:true}).click();
    await page.locator('#input-254').fill("personal")
    await page.getByRole("button",{name:"Save",exact:true}).click()
    
    
    


})