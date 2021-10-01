// either X or Y (union types)
let numOrStr: number | string;
numOrStr = 1; // fine
numOrStr = '1'; // also fine
//numOrStr = false; // <-- not good

// intersection
var nameValue: { key: number } & { value: string } = { key: 0, value: "" };
nameValue.key = 1;
nameValue.value = "test";
//nameValue.foo = "bar";

var numberString: number & string;
//numberString = [];

interface Car {
  doors: number;
  engine: string;
  hasWheels: boolean;
  accelerateCar: (time: number, distance: string) => number;
}

interface Moto {
  hasCart: boolean
  engine: string;
  hasWheels: boolean;
  accelerate: (time: number, distance: string) => number;
}

function x(obj: Moto | Car) {
  if(obj.engine) {
    obj.hasWheels;
  }
}
