



let myPromise = new Promise(function(resolve,reject){

setTimeout(function(){

console.log("Thanks for Ordering Pizza")
let isPizzaAvailable = false
if (isPizzaAvailable){

    resolve("The Order will be deivered in 5 mins")

}
else 
{ 

    reject("The Order might take time, Can we cancel the order?")

}

return isPizzaAvailable

}, 3000)


})


myPromise.then(function(isPizzaAvailable1){console.log(isPizzaAvailable1)})
         .catch((isPizzaAvailable1)=>{
            console.log(isPizzaAvailable1)

         })