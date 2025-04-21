import { test } from "../../Fixtures/customfixture";



test("Testforall",async ({loginref,homepageref}) => {

    await loginref.launchUrl()
    await loginref.loginLeafsTap()
    await homepageref.RedirecttoHomepage()
    
})

// test("Testforall1",async ({homepageref}) => {

    
// })

