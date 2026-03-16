"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer3 = void 0;
var Customer3 = /** @class */ (function () {
    function Customer3(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer3.prototype.getAge = function () {
        console.log(this.age);
        return this.age;
    };
    Customer3.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer3;
}());
exports.Customer3 = Customer3;
