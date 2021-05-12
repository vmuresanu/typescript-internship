var x = 2;
console.log(`x = ${x}`);

//x = "hello";

var str: string = "Hello, World.";
console.log(`str = ${str}`);

//str = 2;

var checked: boolean = false;
console.log(`checked = ${checked}`);
//checked = 'true';

var list: number[] = [1, 2, 3];
list.push(4);
console.log(`list = ${list}`);

enum Car { BMW =4 , MERCEDES, AUDI }

const enum X {Y = 1, W, Z}

console.log(X.W);

var myCar: Car = Car.BMW;
console.log(`Our selected car = ${Car[myCar]}`);

function returnSomething(n: string): number {
  if (Math.random() < 0.5) {
    //return "1";
  }
  return 1;
}

var result = returnSomething('2');
console.log(`result = ${result}`);
