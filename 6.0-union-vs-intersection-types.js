var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// either X or Y (union types)
var numOrStr;
numOrStr = 1; // fine
numOrStr = '1'; // also fine
//numOrStr = false; // <-- not good
// intersection
var nameValue = { key: 0, value: "" };
nameValue.key = 1;
nameValue.value = "test";
//nameValue.foo = "bar";
var notPossible;
function x(obj) {
    if (obj.hasCart) {
        obj.accelerate(3, 50);
    }
}
var entry = { key: 1, value: "foo" };
// entry = { id: 6 };
// spread operator shallow copy
var obj = {
    foo: 'bar',
    x: 0
};
var obj_copy = obj;
console.log("copy is " + obj_copy.x);
console.log('changing source object 0->1');
obj.x = 1; // changed this on the source, not the copy
console.log("copy is " + obj_copy.x);
console.log('...');
var obj_real_copy = __assign({}, obj);
console.log("real copy is " + obj_real_copy.x);
console.log('changing source object 1->5');
obj.x = 5;
console.log("real copy is still " + obj_real_copy.x);
console.log('...');
// array
var arr = [1, 2, 3];
var assignment_of_arr = arr;
var copy_of_arr = __spreadArrays(arr);
arr.pop();
console.log("array assigned after popping an element: " + assignment_of_arr);
console.log("array copy after popping an element: " + copy_of_arr);
console.log('...');
