import test from '@playwright/test'



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
