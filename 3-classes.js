// This should be compiled with ES6 as well for contrast
var _x;
// now I implement the rules given by the interface
class MyClass {
    constructor(someParam) {
        this.someParam = someParam;
        this.notAnInterfaceProperty = 6; // Accepted
    }
    get someName() {
        return 'MyClass ' + this.someParam;
    }
    someMethod(params) {
        for (let index = 0; index < params.length; index++) {
            console.log(params[index].key + " = " + params[index].value);
        }
    }
}
new MyClass(7).someMethod([{ key: '4', value: 3 }, { key: '9', value: 7 }]);
console.log(new MyClass(7).someName);
// think of modules as "namespaces" to protect functions and privatize methods/information
var MyModule;
(function (MyModule) {
    class InternalClass {
        internal() {
            return 'Internal';
        }
    }
    class MyClass {
        print(msg) {
            return msg;
        }
    }
    MyModule.MyClass = MyClass;
    var internalClass = new InternalClass();
    console.log(`calling internalClass.internal: ${internalClass.internal()}`);
    var myClass = new MyClass();
    console.log(`calling myClass.print: ${myClass.print("print this!")}`);
})(MyModule || (MyModule = {}));
var exportedClass = new MyModule.MyClass();
console.log(`calling exportedClass.echo: ${exportedClass.print("Outside!")}`);
//var notExportedClass = new MyModule.InternalClass();
// Access modifiers ES vs TS Private fields and
class A {
    constructor() {
        //private x = 30;
        _x.set(this, 30);
    }
}
_x = new WeakMap();
/*class B extends A {
  x = 20;
}*/
console.log(new A().x);
