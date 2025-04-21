let originalword = "chrome"
let reversed = ""

for(i=originalword.length;i>=0;i--){

    reversed =  reversed + originalword.charAt(i)


}


if(originalword==reversed){

    console.log("The word is paildrome")
} else
{
    console.log("The is not word is paildrome")
}