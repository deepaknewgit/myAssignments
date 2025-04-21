import test from '@playwright/test'



test("logintoSalesforce",async({page})=>{

    page.goto("https://dev185054.service-now.com/")
    await page.locator("//input[@id='user_name']").fill("admin")
    await page.locator("//input[@id='user_password']").fill("+upVR1S7f+vC")
    await page.locator("//button[text()='Log in']").click()
    await page.waitForTimeout(5000)
    await page.context().storageState({path:'creds/ltsession.json'})

})

test.use('./creds/ltsession.json')
test("logintoSalesforcel1",async({page})=>{


    await page.goto("https://dev185054.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3D86d7a01983751210c1e6ac80ceaad31a")
    await page.getByText('All',{exact:true}).click()

})

