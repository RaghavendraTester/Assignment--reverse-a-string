 import{test} from "@playwright/test"

 test("W4_D1_Dropdown" , async ({page}) => {

    await page.goto("https://leafground.com/select.xhtml")

await page.locator('.ui-selectonemenu').first().click();

const automation_tool_count= await page.locator('//select[@class="ui-selectonemenu"]/option').count();

console.log(automation_tool_count);

for (let index = 1; index <=automation_tool_count; index++) {

    console.log(await page.locator(`//select[@class="ui-selectonemenu"]/option[${index}]`).innerText());
   
}

await page.locator('//label[@id="j_idt87:country_label"]').click();

await page.locator('//li[@data-label="India"]').click();

await page.locator('//button[@aria-label="Show Options"]').click();

const count=await page.locator('//ul[@class="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]/li').count();

  console.log(count)

await page.locator(`//ul[@class="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]/li[1]`).click();
  await page.locator(`//ul[@class="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]/li[2]`).click(); 
await page.locator(`//ul[@class="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]/li[3]`).click();
  

await page.locator('//label[text()="Select Language"]').click();

const languange_count=await page.locator('//ul[@id="j_idt87:lang_items"]/li').count();

console.log(languange_count);

for (let index = 1; index <=languange_count; index++) {

    console.log(await page.locator(`//ul[@id="j_idt87:lang_items"]/li[${index}]`).innerText());
    
}



await page.waitForTimeout(4000);
    
    
 })