let orginalword = ""



function reverseWord(word){

orginalword = word
reversed = ""
for(i=orginalword.length;i>=0;i--){

    reversed = reversed + orginalword.charAt(i)
}

console.log(reversed)
 
}


function palindrom(){

    if(reversed!=orginalword){

        console.log("The Given Word is not an Palindrom")
    }else{
    
        console.log("The Given Word is Palindrom")
    }
    
}

reverseWord("deepak")
palindrom()