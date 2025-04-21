

export class empdetails{

empName:String 
empId:number
private empSalary:number
empDob:string


constructor(){

    this.empName= "deepak"
    this.empId = 100
    this.empSalary = 50000
    this.empDob = "11/11/1996"

}


public getSalaryDetails():number{

return this.empSalary

}

public setSalaryDetails(salary:number){

this.empSalary = salary
console.log(salary)

}


printEmpdetails(){

    console.log(this.empName)
    console.log(this.empId)
    console.log(this.empSalary)
    console.log(this.empDob)
    

}


}



function testrunforEncap(){

    const ref = new empdetails()
    ref.getSalaryDetails()
    ref.setSalaryDetails(70000)
   


}


testrunforEncap()
                                                                       


