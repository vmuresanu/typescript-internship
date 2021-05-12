// I am a class with an id
var MyClass7 = /** @class */ (function () {
    function MyClass7() {
    }
    return MyClass7;
}());
// in this echo, the returned value is cast to IHasId
function nonGenericMethod(item) {
    console.log("Id is " + item.id);
    return item;
}
// in this echo, the returned value is cast to the type passed in
function genericMethod(item) {
    console.log("Id is " + item.id);
    return item;
}
var myInstance = new MyClass7();
myInstance.id = 2;
myInstance.description = "This is my description.";
var nonGeneric = nonGenericMethod(myInstance); // type of nonGeneric is IHasId
// console.log(nonGeneric.description); // <-- issue, type is IHasId so no description
var generic = genericMethod(myInstance); // type of generic is MyClass
console.log(generic.description); // <-- works fine
// find the first item in the list that satisfies a predicate
function findFirst(list, predicate) {
    for (var index = 0; index < list.length; index++) {
        if (predicate(list[index])) {
            return list[index];
        }
    }
    return;
}
var list = [];
list.push({ key: 1, value: "foo" });
list.push({ key: 2, value: "bar" });
list.push({ key: 3, value: "buzz" });
list.push({ key: 4, value: "brr" });
list.push({ key: 5, value: "bac" });
list.push({});
// intelliSense understands what item must look like based on the list
// furthermore, result2 is of type { key: number, value: string };
var result2 = findFirst(list, function (item) { return item.key === 3; });
console.log("Found result with value: " + (result2 === null || result2 === void 0 ? void 0 : result2.value));
