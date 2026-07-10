

import { chromium,test } from "@playwright/test";
test("Create a lead",async function name({page}) {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("democsr2");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    await page.locator('//a[text()="Leads"]').click();
       await page.waitForTimeout(2000)
  
    await page.locator('//a[text()="Create Lead"]').click();
       await page.waitForTimeout(2000)
   
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Qapitol QA")
       await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_firstName').fill("Raghavendra")
        await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_lastName').fill("Kulkarni")
     await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_personalTitle').fill("Mr.")
      await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_generalProfTitle').fill("Automation Tester")
        await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_annualRevenue').fill("10,00,000")
      await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_departmentName').fill("Automation Delivery")
      await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("6541237898")
     await page.waitForTimeout(2000)
    await page.locator('//input[@value="Create Lead"]').click();
    const titleOfThePage=await page.title();
    await console.log(titleOfThePage)
    await page.waitForTimeout(3000)
    
})