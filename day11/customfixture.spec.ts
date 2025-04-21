import {test} from '@playwright/test'

export const login = test.extend({myFixture:async ({page},use) => {


    await page.goto("https://login.salesforce.com/")
    await page.locator("input[class$='username']").fill("majay3574@gmail.com")
    await page.locator("#password").fill("Ajaymichael@123")
    await page.locator("input[type='checkbox']").click()
    await page.locator('input[type="submit"]').click()
    use(page)

    
}})




// login('CustomfixtureText', async ({myFixture}) => {

//     await myFixture.locator("//button[@title='App Launcher']").click()
//     await myFixture.locator("//button[text()='View All']").click()
//     await myFixture.locator("//p[text()='Accounts']").click()
   
// })

   