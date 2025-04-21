
let testType
let browserName

function runTests(testType) {

    switch (testType) {

        case "smoke": {

            console.log("Smoke test")
            break
        }

        case "sanity": {

            console.log("sanity test")
            break
        }

        case "Regression": {

            console.log("Regression test")
            break
        }

        default: {

            console.log("smoke defualt")
        }

    }


}

function launchBrowser(browserName) {

    if (browserName == "Chrome") {

        console.log("The Browser is Chrome")

    } else if (browserName == "firefox") {
        console.log("firefox Browser")


    } else {

        console.log("undefined browser")

    }

}


launchBrowser("firefox")
runTests("Regression")

