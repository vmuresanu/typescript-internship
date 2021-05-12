var car = { brand: "BMW", nrOfWheels: 4, engine: "200cp" };
//var advocate: Advocate = { name: "John Papa", twitter: "@John_Papa", awesome: "Unmeasurable" };
var getProperty = function (obj, key) { return car[key]; };
console.log(getProperty(car, "brand"));
//console.log(getProperty(car, "transmissionType"));
console.log("...");
//------------------------------------------
// explicit type guard
var isNumber = function (inp) {
    console.log("inp: " + inp + " typeof inp: " + typeof inp);
    return typeof inp === "number";
};
var nr = 5;
//console.log(nr.toFixed(0)); // no intellisense
if (isNumber(nr)) {
    console.log(nr.toFixed(0), '1111111111'); // intellisense
}
var myString = "my secret";
console.log(myString.charAt(0)); // no intellisense
if (typeof myString === "string") { // implicit type guard
    console.log(myString.charAt(0)); // intellisense
}
