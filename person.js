var Person = /** @class */ (function () {
    function Person(name, pro) {
        this.name = name;
        this.pro = pro;
        this.name = name;
        this.pro = pro;
    }
    Person.prototype.display = function () {
        console.log(this.name + " " + this.pro);
    };
    return Person;
}());
var p = new Person("Rupali", " UI devloper");
p.display();
