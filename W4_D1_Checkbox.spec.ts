

import{expect, test} from "@playwright/test"

test("W4_D1_Checkbox", async ({page}) => {

    await page.goto("https://leafground.com/checkbox.xhtml")

    await page.locator('//span[text()="Basic"]').click();

    await page.waitForTimeout(2000)

    await page.locator('//span[text()="Ajax"]').click();

    await page.waitForTimeout(2000)

    const gettext01= await page.locator('.ui-growl-title').nth(0).innerText();
    console.log(gettext01);

    //Verification-01
    expect.soft(gettext01).toBe("Checked")

    await page.locator('//label[text()="Javascript"]').click();


  const gettext02= await page.locator('//span[text()="State has been changed."]/../p').innerText();
  console.log(gettext02);

 // Verification-02
   expect.soft(gettext02).toBe("State = 1")

   await page.locator('.ui-toggleswitch-slider').click();

   await page.locator('//span[text()="Disabled"]').click();

    await page.locator('//ul[@data-label="Cities"]').click();

    

     await page.locator('(//label[text()="Miami"])[2]').click();
     await page.locator('(//label[text()="Barcelona"])[2]').click();
     await page.locator('(//label[text()="Rome"])[2]').click();
     await page.locator('(//label[text()="London"])[2]').click();

      await page.waitForTimeout(4000)
    
})