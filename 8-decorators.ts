// class decorator
function ctor(constructor: Function) {
  const getFnName = fn => fn.name
  console.log(`Constructed ${getFnName(constructor)} at ${new Date()}`);
}

// method decorator
function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): any {

  let originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.info(`The method args are: ${JSON.stringify(args)}`);
    var result = originalMethod.apply(this, args);
    console.info(`The return value is: ${result}`);
    return result;
  };

  return descriptor;
}

@ctor
class Person {
  constructor(public firstName: string, public lastName: string) {

  }

  @log
  showFullNameWithPrefix(prefix: string): string {
    return `${prefix} ${this.firstName} ${this.lastName}`;
  }
}

var person = new Person("John", "Doe");
console.log(`Good afternoon, ${person.showFullNameWithPrefix("Mr.")}`);

console.log('...');

class PersonEntity {
  constructor(public firstName: string, public lastName: string) {
  }

  showFullNameWithPrefix(prefix: string): string {
    return `${prefix} ${this.firstName} ${this.lastName}`;
  }
}

var specialPerson = new PersonEntity("Joanna", "Doe");
console.log(`Good afternoon, ${specialPerson.showFullNameWithPrefix("Mrs.")}`);
