var cardinalDiraction;
(function (cardinalDiraction) {
    cardinalDiraction[cardinalDiraction["North"] = 0] = "North";
    cardinalDiraction[cardinalDiraction["East"] = 1] = "East";
    cardinalDiraction[cardinalDiraction["South"] = 2] = "South";
    cardinalDiraction[cardinalDiraction["west"] = 3] = "west";
})(cardinalDiraction || (cardinalDiraction = {}));
console.log("cardinalDiraction");
console.log(cardinalDiraction[0]);
console.log(cardinalDiraction[1]);
console.log(cardinalDiraction[2]);
console.log(cardinalDiraction[3]);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
console.log("StatusCode");
console.log(StatusCode[404]);
console.log(StatusCode[200]);
console.log(StatusCode[202]);
console.log(StatusCode[400]);
