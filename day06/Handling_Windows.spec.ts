import test, {chromium, expect}from '@playwright/test'
import { lstat } from 'fs'

test('Handle window and Alert', async({page,context})=>{


page.goto("http://leaftaps.com/opentaps/control/main")

//Create a context to handle the new window created
const newPromise = context.waitForEvent('page')




//Login 
await page.fill("#username", "demoSalesmanager")
await page.fill("#password", "crmsfa")
await page.locator("input[type='submit']").click()



await page.locator("//a[contains(text(), 'CRM/SFA')]").click()
await page.locator("//a[text()='Leads']").click()
await page.locator("//a[text()='Merge Leads']").click()
await page.locator("img[src]").nth(8).click()

//Make the promise to reslove and create a new instance of the new window so can use this refrence to handle the elements in the new window
const newWindow = await newPromise
await newWindow.locator("a[class='linktext']").first().click()
await page.waitForTimeout(3000)
await page.locator("img[src]").nth(9).click();
const newPromise1 = context.waitForEvent('page')
const newWindow1 = await newPromise1
const locatorfro2nd = newWindow1.locator("(//a[@class='linktext'])[6]")
await locatorfro2nd.waitFor({state:'visible'})
await locatorfro2nd.click()


page.on('dialog', altertType=>{

    const getAlertType = altertType.message()
    const alertMsg = altertType.message();
    console.log("The AlertType"+getAlertType)
    altertType.dismiss()
    })

    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Merge']").click()
    const titleResult:String  = await page.title();
    expect(titleResult).toContain("Merge Leads | opentaps CRM")
    


})

