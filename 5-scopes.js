// let vs var
// also: use ES6 for contrast
var app = function () {
    var withVar = function () {
        for (var index = 0; index < 10; index += 1) {
            setTimeout(function () { return console.log("var idx = " + index); }, 0);
            console.log("var index withOutSetTimeOut = " + index);
        }
    };
    var withLet = function () {
        var _loop_1 = function (index) {
            setTimeout(function () { return console.log("let index = " + index); }, 0);
            console.log("let index withOutSetTimeOut = " + index);
        };
        for (var index = 0; index < 10; index += 1) {
            _loop_1(index);
        }
    };
    withVar();
    withLet();
};
setTimeout(app, 0);
var maxRows = 1000;
//maxRows = 12;
if (100 < maxRows) {
    console.log("It is within range!");
}
