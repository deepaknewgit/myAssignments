import test from '@playwright/test'
const path = require('path');



test('FileUpload and Download', async ({page}) => {

    await page.goto("https://login.salesforce.com/")
    await page.locator("input[class$='username']").fill("majay3574@gmail.com")
    await page.locator("#password").fill("Ajaymichael@123")
    await page.locator("input[type='checkbox']").click()
    await page.locator('input[type="submit"]').click()
    await page.locator("//button[@title='App Launcher']").click()
    await page.locator("//button[text()='View All']").click()
    await page.locator("//p[text()='Accounts']").click()
    await page.locator("div[title='New']").click()
    await page.locator("input[name='Name']").fill("Deepak")
    await page.locator("button[role='combobox']").first().click()
    await page.locator("span[title='Warm']").click()
    await page.locator("(//label[text()='Type']/following-sibling::div)[1]").click()
    await page.locator("span[title='Prospect']").click()
    await page.locator("(//label[text()='Ownership']/following-sibling::div)[1]").click()
    await page.locator("span[title='Public']").click()
    await page.locator("(//label[text()='Industry']/following-sibling::div)[1]").click()
    await page.locator("span[title='Banking']").click()
    await page.locator("//button[text()='Save']").click()

    //Upload file 
    
    await page.waitForTimeout(7000)
    const filePromise = page.waitForEvent('filechooser')
    await page.locator("//span[text()='Or drop files']/preceding-sibling::span").click()
    const uploadFile1 = await filePromise
    //await uploadFile1.setFiles("C:/Users/deepa/OneDrive/Desktop/PW/creds/weekdays01.txt")
    const filePath = path.join(__dirname,'../../creds/weekdays01.txt');
    console.log(filePath)
    await uploadFile1.setFiles(filePath)


    
})
