import {test as basetest} from '@playwright/test'
import { Login } from './Approach1.ts'


type salesforcety =
{

    lpref:Login
  //  hpref:HomePage
 
}


// export const test  = basetest.extend<salesforcety>({lpref:async ({page},use) => {


//    const loginpage = new Login(page)
//    use(loginpage)

    
// }})

export const  test  = basetest.extend<salesforcety>({hpref:async ({page},use) => {


    const loginpage = new Login(page)
    use(loginpage)
 
     
 }})



