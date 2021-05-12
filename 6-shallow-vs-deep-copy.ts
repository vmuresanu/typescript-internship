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

var notPossible: number & string;
//notPossible = 23;

interface Car {
  doors: number;
  engine: string;
  hasWheels: boolean;
  accelerateCar: (time, distance) => number;
}

interface Moto {
  hasCart: boolean
  engine: string;
  hasWheels: boolean;
  accelerate: (time, distance) => number;
}

function x(obj: Moto & Car) {
  if(obj.hasCart) {
    obj.accelerate(3, 50);
  }
}

// custom types
type NameValuePair = { key: number, value: string };

var entry: NameValuePair = { key: 1, value: "foo" };
// entry = { id: 6 };

// spread operator shallow copy
let obj = {
  foo: 'bar',
  x: 0
};
let obj_copy = obj;
console.log(`copy is ${obj_copy.x}`);
console.log('changing source object 0->1');
obj.x = 1; // changed this on the source, not the copy
console.log (`copy is ${obj_copy.x}`);

console.log('...');

let obj_real_copy = { ...obj };
console.log(`real copy is ${obj_real_copy.x}`);
console.log('changing source object 1->5');
obj.x = 5;
console.log (`real copy is still ${obj_real_copy.x}`);

console.log('...');

// array
let arr = [1, 2, 3];
let assignment_of_arr = arr;
let copy_of_arr = [ ...arr ];
arr.pop();
console.log(`array assigned after popping an element: ${assignment_of_arr}`);
console.log(`array copy after popping an element: ${copy_of_arr}`);

console.log('...');

