var objectWithIdentifier = { id: 1 };
var myObject = { id: 1 };
//myObject.foo = 'x';
//myObject.desc = 'description';
var myObjectToo = myObject;
function showId(obj) {
    console.log(`Showing id: ${obj.id}`);
}
showId(myObject);
showId({ id: 3.14 }); // <IHaveAnIdentifier>
function showDesc(obj) {
    if (obj.desc) {
        console.log(obj.desc);
    }
}
var myObjectWithDescription = {
    id: 1974,
    desc: "Rock it!"
};
showDesc(myObject);
showDesc(myObjectWithDescription);
var powerOf = function (a, b) {
    return Math.pow(a, b);
};
console.log(powerOf(3, 4));
console.log(powerOf(4, 3));
