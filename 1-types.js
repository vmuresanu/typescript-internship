var x = 2;
console.log("x = " + x);
//x = "hello";
var str = "Hello, World.";
console.log("str = " + str);
//str = 2;
var checked = false;
console.log("checked = " + checked);
//checked = 'true';
var list = [1, 2, 3];
list.push(4);
console.log("list = " + list);
var Car;
(function (Car) {
    Car[Car["BMW"] = 4] = "BMW";
    Car[Car["MERCEDES"] = 5] = "MERCEDES";
    Car[Car["AUDI"] = 6] = "AUDI";
})(Car || (Car = {}));
console.log(2 /* W */);
var myCar = Car.BMW;
console.log("Our selected car = " + Car[myCar]);
function returnSomething(n) {
    if (Math.random() < 0.5) {
        //return "1";
    }
    return 1;
}
var result = returnSomething('2');
console.log("result = " + result);
