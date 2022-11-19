var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            // format 
            return this._userName;
        },
        set: function (name) {
            if (name == "codemind") {
                this._userName = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.display = function () {
        console.log(this._userName);
    };
    return Student;
}());
var objstudent = new Student();
objstudent.name = "Codemind";
console.log(objstudent.name);
