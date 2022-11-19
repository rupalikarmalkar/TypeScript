var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.fun = function (num1, num2) {
        var a = num1 + num2;
        console.log("The Addition of number  is ".concat(num1, "  + ").concat(num2, " = ").concat(a));
        var b = num1 - num2;
        console.log(" The subtraction of number  is   ".concat(num1, " - ").concat(num2, "  = ").concat(b));
        var c = num1 * num2;
        console.log("The  Multiplication of number  is   ".concat(num1, " * ").concat(num2, " = ").concat(c));
        var d = num1 / num2;
        console.log("The Division  of number  is  ".concat(num1, " /").concat(num2, "  ").concat(d));
    };
    return Calculator;
}());
;
Calculator.fun(75, 25);
