
import test, { chromium, firefox } from "@playwright/test";


test("FrameSampleTest", async ({page,context}) => {
 
page.goto("https://dev185054.service-now.com/")
await page.locator("//input[@id='user_name']").fill("admin")
await page.locator("//input[@id='user_password']").fill("+upVR1S7f+vC")
await page.locator("//button[text()='Log in']").click()
await page.getByText('All',{exact:true}).click()
await page.getByPlaceholder('Filter',{exact:true}).fill('Service Catalog')
await page.getByText('Service Catalog',{exact:true}).first().click()
const iframe = page.frameLocator("iframe")
await page.waitForTimeout(3000)
await iframe.getByText("Mobiles").first().click();
const countFrame = page.frames()
console.log(countFrame.length)
const iframe1 = page.frameLocator("iframe");
await iframe1.locator("//strong[text()='Apple iPhone 13']").click()
await iframe.getByText('No', { exact: true }).click();
await iframe1.locator("select").first().selectOption({ index: 1 });
await iframe1.getByText("Midnight",{exact:true}).click()
//await iframe1.locator("//label[text()='Midnight']").click()
await iframe1.locator("//label[text()='256 GB [add $100.00]']").click()
await iframe1.getByTitle("Order Now",{exact:true}).click()

















//await page.frameLocator("(//iframe)[1]").locator("//a[contains(text(), 'Cell phones to meet')]").click()
//await page.locator("//strong[text()='Apple iPhone 13']").click()
// const countofFrames = page.frames().length
// console.log(countofFrames)
// const frameselect = await countofFrames[0]
// await frameselect.locator("//input[@value='no']/following-sibling::label").click()














    
})