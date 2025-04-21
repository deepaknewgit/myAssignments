"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mytest1 = /** @class */ (function () {
    function Mytest1() {
    }
    Mytest1.prototype.connect = function () {
        console.log("Connection is successful");
    };
    Mytest1.prototype.disconnect = function () {
        console.log("Connection is Off");
    };
    Mytest1.prototype.executeUpdate = function () {
        console.log("Row is updated");
    };
    return Mytest1;
}());
// function runtestcase1(){
//     new Mytest1().connect()
//     new Mytest1().executeUpdate
//     new Mytest1().disconnect
// }
//runtestcase()
