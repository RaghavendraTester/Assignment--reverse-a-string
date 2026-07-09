
//browser , context, page



import{firefox,chromium, test} from "@playwright/test"

test("Login to Redbus application",async()=>{

//browser , context, page

const browser=await chromium.launch({channel:"msedge"});
const context= await browser.newContext();
 const page= await context.newPage();

 await page.goto(" https://www.redbus.in")

 
 const redbusURL=page.url();

 console.log( redbusURL);

 const redbusPageTitle= await page.title();

 console.log(redbusPageTitle)
 

 //await page.waitForTimeout(5000);


})

test("Login to Filpkart application",async()=>{

const browser=await firefox.launch();
const context= await browser.newContext();
 const page= await context.newPage();

 await page.goto(" https://www.flipkart.com")

 const filpkartURL=page.url();

 console.log( filpkartURL);

 const flipkartPageTitle= await page.title();

 console.log(flipkartPageTitle)
 

 //await page.waitForTimeout(5000);


})


