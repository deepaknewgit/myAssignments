import test, { chromium, firefox } from "@playwright/test";


test("Launch Browser", async()=>{

const browser = await chromium.launch()
const context1 = await browser.newContext()
const page1 =  await context1.newPage()
await page1.goto("https://www.google.com/")
await page1.waitForTimeout(5000)
console.log(page1.title)


})

test("launch Browser - Firefox", async ()=> {

const browser2 = await firefox.launch()
const context2 = await browser2.newContext()
const page2 = await context2.newPage()
page2.goto("https://www.google.com/")
await page2.waitForTimeout(5000)
console.log(page2.title)

})