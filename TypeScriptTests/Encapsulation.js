"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empdetails = void 0;
var empdetails = /** @class */ (function () {
    function empdetails() {
        this.empName = "deepak";
        this.empId = 100;
        this.empSalary = 50000;
        this.empDob = "11/11/1996";
    }
    empdetails.prototype.getSalaryDetails = function () {
        return this.empSalary;
    };
    empdetails.prototype.setSalaryDetails = function (salary) {
        this.empSalary = salary;
        console.log(salary);
    };
    empdetails.prototype.printEmpdetails = function () {
        console.log(this.empName);
        console.log(this.empId);
        console.log(this.empSalary);
        console.log(this.empDob);
    };
    return empdetails;
}());
exports.empdetails = empdetails;
function testrunforEncap() {
    var ref = new empdetails();
    ref.getSalaryDetails();
    ref.setSalaryDetails(70000);
}
testrunforEncap();
