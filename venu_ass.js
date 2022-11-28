var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.Print = function () {
        console.log("Event details");
        //      console.log(` ${this.id}, ${this.name} `);
    };
    return Organizer;
}());
var Eevent = /** @class */ (function (_super) {
    __extends(Eevent, _super);
    function Eevent(id, name, description, starttime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.starttime = starttime;
        return _this;
    }
    // overriding parent class print method .
    Eevent.prototype.Print = function () {
        _super.prototype.Print.call(this); //when u  r calling method from parent class to child that time we have to use super.print()
        // console.log(`  ${this.description}  ${this.starttime}`);
    };
    return Eevent;
}(Organizer));
var Venu = /** @class */ (function (_super) {
    __extends(Venu, _super);
    function Venu(id, name, description, starttime, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.address = address;
        return _this;
    }
    // overriding parent class print method .
    Venu.prototype.Print = function () {
        _super.prototype.Print.call(this); //when u  r calling method from parent class to child that time we have to use super.print()
        //console.log(`  ${this.description}  ${this.address}`);
    };
    return Venu;
}(Organizer));
var orgna = new Array(new Organizer(7, "Neha Pande"), new Eevent(7, "Neha Pande", "Birthday Party", "5 PM"), new Venu(7, "Neha Pande", "Aishwarya Banquet Hall", "Near AES College", "Pune"));
for (var _i = 0, orgna_1 = orgna; _i < orgna_1.length; _i++) {
    var item = orgna_1[_i];
    item.Print();
    console.log(item);
}
//console.log(orgna);
