//import test from '@playwright/test'
//import test from '../day12/fixturefile.ts'
import { Login } from './Approach1.ts'
import { test } from './fixturefile.ts'





// test("TestSampleFile01",async ({page}) => {

//     const loginRef = new Login(page)
//     await loginRef.launchUrl()
//     await loginRef.loginWebsite()

// })

test("TestSampleFile02",async ({lpref}) => {

    //const loginRef = new Login(page)
    await lpref.launchUrl()
    await lpref.loginWebsite()

})

