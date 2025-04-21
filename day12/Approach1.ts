import { chromium, Page } from "@playwright/test"

export class Login{

userName:string
password:string
url:string
page:Page

constructor(page:Page){

    this.userName="majay3574@gmail.com"
    this.password="Ajaymichael@123"
    this.url="https://login.salesforce.com/"
    this.page=page
   
}


async launchUrl(){

     await this.page.goto(this.url)

}

async loginWebsite(){

    await this.page.locator("input[class$='username']").fill("majay3574@gmail.com")
    await this.page.locator("#password").fill("Ajaymichael@123")
    await this.page.locator("input[type='checkbox']").click()
    await this.page.locator('input[type="submit"]').click()


}


}

async function runFun(){

const browser = await chromium.launch({headless:false})
const context = await browser.newContext()
const page = await context.newPage()
const loginRef = new Login(page)
await loginRef.launchUrl()
await loginRef.loginWebsite()
}

//runFun()