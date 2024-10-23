function studentGrade(score){

    switch(score){

     case 90:{
        console.log("GRADE A")
        break
     }
     case 80:{
        console.log("GRADE B")
        break

     }
     case 70:{
        console.log("GRADE C")
        break
     }

    default:{
        console.log("Less than C")
    }
    }
}

studentGrade(90)