import test, { expect } from '@playwright/test'
//const path = require('path');


test('Marathontest2', async ({page}) => {

    await page.goto("https://login.salesforce.com/")
    await page.locator("input[class$='username']").fill("majay3574@gmail.com")
    await page.locator("#password").fill("Ajaymichael@123")
    await page.locator("input[type='checkbox']").click()
    await page.locator('input[type="submit"]').click()
    await page.locator("//button[@title='App Launcher']").click()
    await page.locator("//button[text()='View All']").click()
    await page.fill("//input[@part='input']","dashboards")
    await page.setDefaultTimeout(3000)
    await page.locator("//mark[text()='Dashboards']").click()
    await page.setDefaultTimeout(5000)
    await page.locator("//div[@title='New Dashboard']").click()
    const frame1 = page.frameLocator('(//iframe)[1]')
    await page.setDefaultTimeout(6000)
    await frame1.locator("//input[@id='dashboardNameInput']").fill("DeepakSarath")
    await frame1.locator("#submitBtn").click()
    await frame1.locator("//button[text()='Save']").click()
    ////span[text()='Dashboard saved']
    const text1 = await page.locator("span[class*='toastMessage']").innerText()
    expect("You need permission to save this dashboard. Ask your Salesforce administrator for help.").toContain(text1)
    //await frame1.locator("button[text()='Done']").click()



    
    
})


test.describe.serial('Test',async() =>{




const BaseUrl = "https://login.salesforce.com/services/oauth2/token" 
let accessToken:any  

test("SalesForce",async ({request}) => {


const response = await request.post(BaseUrl,{
    headers:{
       
     "Content-Type":"application/x-www-form-urlencoded",
     "Connection":"keep-alive"

    },

    form:{

        "grant_type":"password",
        "client_id":"3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
        "client_secret":"149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
        "username":"vidyar@testleaf.com",
        "password":"Sales@123"
    }

    })

let generateaccess = await response.json()
accessToken = generateaccess.access_token
console.log(accessToken)

    
})



})



