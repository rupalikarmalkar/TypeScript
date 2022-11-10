var Employee = {
    id: 7,
    fname: "Jack",
    lastName: "Sparrow",
    mobile: 457825462
};
console.log("Object Destructing");
var id = Employee.id, fname = Employee.fname, lastName = Employee.lastName, mobile = Employee.mobile;
console.log(Employee);
console.log("Object Traversing ");
for (var key in Employee) {
    if (Object.prototype.hasOwnProperty.call(Employee, key)) {
        var element = Employee[key];
        console.log(element);
    }
}
console.log();
var array = ["J&J", "Pifizer", "Sputnik"];
console.log("Given array is: ".concat(array));
array.push("Covaxin");
console.log("After adding element array is :".concat(array));
console.log("Array Traversing");
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var element = array_1[_i];
    console.log(element);
}
console.log("Array Destructuring");
for (var index = 0; index < array.length; index++) {
    console.log(array[3]);
}
