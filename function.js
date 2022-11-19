function doubleMe(x) {
    // checking input parameter as number or not
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    // checking input para as string or not
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name + " " + name); });
    }
}
