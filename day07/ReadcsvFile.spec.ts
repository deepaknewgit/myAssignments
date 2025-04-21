import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import path from 'path'
import fs from 'fs'

//To parse the csv file 

const filePath = path.join(__dirname, '../../creds/CsvData.csv')
//const fileContent = fs.readFileSync(filePath, 'utf-8');
const loginData  = parse(fs.readFileSync(filePath),{columns:true})



    for (let eachData of loginData){

        test(`Read the Csv file data for TestcaseId: ${eachData.TestcaseId}`, async ({ page }) => {
            await page.goto("http://leaftaps.com/opentaps/control/main");
            await page.fill("#username", loginData[0].username);
            await page.fill("#password",loginData[0].password);
            console.log(loginData[0].username)
            console.log(loginData[0].password)

            await page.locator("input[type='submit']").click();
        })

    }

   