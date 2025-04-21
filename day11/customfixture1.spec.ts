import { login } from "./customfixture.spec";


login('CustomfixtureText1', async ({myFixture}) => {

    await myFixture.locator("//button[@title='App Launcher']").click()
    await myFixture.locator("//button[text()='View All']").click()
    await myFixture.locator("//p[text()='Accounts']").click()
   
})
