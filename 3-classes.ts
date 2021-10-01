// This should be compiled with ES6 as well for contrast

// I have a name and a save method
interface NameWithMethod {
  someName: string;
  someMethod: (params: { key: string, value: number }[]) => void;
}

// now I implement the rules given by the interface
class MyClass implements NameWithMethod {

  public notAnInterfaceProperty: number = 6; // Accepted

  constructor(public someParam: number) {
  }

  get someName(): string {
    return 'MyClass ' + this.someParam;
  }

  someMethod(params: { key: string, value: number }[]): void {
    for (let index: number = 0; index < params.length; index++) {
      console.log(params[index].key + " = " + params[index].value);
    }
  }
}

new MyClass(7).someMethod([{key: '4', value: 3}, {key: '9', value: 7}]);
console.log(new MyClass(7).someName);

// think of modules as "namespaces" to protect functions and privatize methods/information
module MyModule {
    class InternalClass {
        internal(): string {
            return 'Internal';
        }
    }

    export class MyClass {
        print(msg: string): string {
            return msg;
        }
    }

    var internalClass = new InternalClass();
    console.log(`calling internalClass.internal: ${internalClass.internal()}`);

    var myClass = new MyClass();
    console.log(`calling myClass.print: ${myClass.print("print this!")}`);

}

var exportedClass = new MyModule.MyClass();
console.log(`calling exportedClass.echo: ${exportedClass.print("Outside!")}`);

// var notExportedClass = new MyModule.InternalClass();

// Access modifiers ES vs TS Private fields and

class A {
 // protected x = 30;
  //private x = 30;
  #x = 30;
}

/*class B extends A {
  x = 20;
}*/

console.log((new A() as any).x);
