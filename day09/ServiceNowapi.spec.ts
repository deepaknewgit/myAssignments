import test, { expect } from '@playwright/test'




let serviewnowUrl = "https://dev216320.service-now.com/"
let createTable = "api/now/table/incident"
let globalsysId:any

test('ServiceNowApi', async ({request}) => {


    const response = await request.post(serviewnowUrl+""+createTable, {
        headers:{

            "Authorization": "Basic YWRtaW46VVkybU9VZV43cEBm",
            "Content-Type":"application/json",
        },
        data:{

            "short_description":"creating incident through postman "
        }
    })


const Resposeofcall = await response.json()
console.log(Resposeofcall)
let globalsysId = await Resposeofcall.result.sys_id
expect(response.status()).toEqual(201)


    
}
)