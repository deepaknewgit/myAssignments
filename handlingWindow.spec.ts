import test, { chromium, firefox } from "@playwright/test";


test("Launch Browser", async({page,context})=>{

const pagePromise = context.waitForEvent("page")
await page.goto("https://www.leafground.com/window.xhtml")
await page.locator("//button[@type='button']").first().click()
const redirection = await pagePromise
await redirection.waitForTimeout(5000)
const title = await redirection.title()
console.log(title)
await redirection.bringToFront()


})

test.only(`Handling window with concurrent approach`, async ({ context, page }) => {


    await page.goto("https://www.leafground.com/window.xhtml")
    
       const  [multiplePromise] =await Promise.all([             
             context.waitForEvent('page'),
             page.locator("//span[text()='Open Multiple']").click()
            /*
            click on open multiple-->[webtable, dashboard]
            await webPage.locator()
            await dashPage.locator()
            */
      ] )
      const countOFwindows= multiplePromise.context().pages()
      console.log(countOFwindows.length)


      countOFwindows.forEach(async element => {
           console.log(element.url()) 
          console.log( await element.title())
      });



     let windowName="Web Table"
     let tabTitle:any
      for (let i=0;i<countOFwindows.length;i++){
            const title=await countOFwindows[i].title() //getting the title of each opened page
            if(title===windowName){
                 tabTitle=countOFwindows[i]
            }



      }



      await tabTitle.bringToFront()
      await tabTitle.locator("//input[@placeholder='Search']").fill("Japan")
      await tabTitle.waitForTimeout(4000)


      async function windowHandle(windowName:string){
        let tabTitle:any
         for (let i=0;i<countOFwindows.length;i++){
               const title=await countOFwindows[i].title() //getting the title of each opened page
               if(title===windowName){
                    tabTitle=countOFwindows[i]
               }
         }   
    await tabTitle.bringToFront()
    await tabTitle.locator("//input[@placeholder='Search']").fill("Japan")
    await tabTitle.waitForTimeout(4000)
       }
   windowHandle("Web Table")
})