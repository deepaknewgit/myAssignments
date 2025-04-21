class Browser 

{

browserName:String
browserVerison:any

constructor()
{

this.browserName = "Chrome"
this.browserVerison = 45

}


openUrl()
{
console.log("The Url is Opened")
}

closebrowser()
{
console.log("The Browser is closed")
}

navigateBack(){
console.log("The Browser is navigated back")
}
}



class chrome extends Browser  {

    openIncognitoMode(){"Opened the Browser in Incoginto mode"}
    clearCache(){"cleared the cache"}

}

class edge extends Browser {

    takeSnapShot(){"Took screenshot"}
    clearcookies(){"cleared the cookies"}

}

class firefox extends Browser{

    readMode(){"Opened the Browser in Incoginto mode"}
    fullScreenMode(){"Created the cache"}

}



function browserlaunch(){

    const obj1 = new Browser()
    obj1.browserName
    obj1.browserVerison
    obj1.openUrl
   


}




