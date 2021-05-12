type CarBrand = "BMW" | "Mercedes" | "Audi";

interface Car9 {
  brand: CarBrand;
  nrOfWheels: number;
  engine: string;
}

type CarProperty = keyof Car9;

var car: Car9 = { brand: "BMW", nrOfWheels: 4, engine: "200cp" };
//var advocate: Advocate = { name: "John Papa", twitter: "@John_Papa", awesome: "Unmeasurable" };

const getProperty = (obj: Car9, key: CarProperty) => car[key];
console.log(getProperty(car, "brand"));
//console.log(getProperty(car, "transmissionType"));

console.log("...");
//------------------------------------------

// explicit type guard
const isNumber = (inp: any): inp is number => {
  console.log(`inp: ${inp} typeof inp: ${typeof inp}`);
  return typeof inp === "number";
}

var nr: any = 5;
console.log(nr.toFixed(0)); // no intellisense
if (isNumber(nr)) {
  console.log(nr.toFixed(0), '1111111111'); // intellisense
}

var myString: any = "my secret";
console.log(myString.charAt(0)); // no intellisense
if (typeof myString === "string") { // implicit type guard
  console.log(myString.charAt(0)); // intellisense
}
