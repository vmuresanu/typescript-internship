var x = 2;
console.log("x = ".concat(x));
//x = true;
var str = '56';
console.log("str = ".concat(str));
//str = 2;
var checked = true;
console.log("checked = ".concat(checked));
//checked = 'true';
var list = [1, 2, 3];
list.push(4);
console.log("list = ".concat(list));
var Car;
(function (Car) {
    Car[Car["BMW"] = 4] = "BMW";
    Car[Car["MERCEDES"] = 5] = "MERCEDES";
    Car[Car["AUDI"] = 6] = "AUDI";
})(Car || (Car = {}));
console.log(2 /* W */);
console.log(Car.BMW);
var myCar = Car.BMW;
console.log("Our selected car = ".concat(Car[myCar]));
function returnSomething(n) {
    if (Math.random() < 0.5) {
        return "1";
    }
    //return 1;
}
var result = returnSomething('2');
console.log("result = ".concat(result));
