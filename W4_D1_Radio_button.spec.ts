
import{expect, test} from "@playwright/test"

test("W4_D1_Radiobutton", async ({page}) => {

    await page.goto("https://leafground.com/radio.xhtml")

    const browserbutton= await page.locator('//label[text()="Safari"]').last();

    const ageGroupButton= await page.locator('//label[text()="21-40 Years"]');

    //Assert Selected button 

    await expect(browserbutton).toBeChecked();
    await expect(ageGroupButton).toBeChecked();
    
    // Favorite browser - SelectButton
    const chromeButton = page.locator("(//label[text()='Chrome'])[1]");

    // Assert button is enabled
    await expect(chromeButton).toBeEnabled();

    // Click Chrome
    await chromeButton.click();

    // Click on Location or city name
    await page.locator('//label[text()="Bengaluru"]').click();

    const ageButton= await page.getByText("41-60 Years",{exact:true});
    
    //Assert ageButton is selected

    await expect(ageButton).toBeEditable();

    //Select age button
    await ageButton.click();

    await page.waitForTimeout(3000);



})