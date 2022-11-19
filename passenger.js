var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequencyFlyerno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequencyFlyerno = frequencyFlyerno;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + "" + this.frequencyFlyerno);
    };
    return Passenger;
}());
var passenger = new Passenger("Jack", "Sparrow", 102);
passenger.display();
var passenger2 = new Passenger("Harry", "Potter", 498);
passenger2.display();
for (var item in passenger) {
    if (item !== "display") {
        console.log(item);
        console.log(passenger[item]);
    }
}
