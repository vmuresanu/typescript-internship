var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class decorator
function ctor(constructor) {
    const getFnName = fn => fn.name;
    console.log(`Constructed ${getFnName(constructor)} at ${new Date()}`);
}
// method decorator
function log(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.info(`The method args are: ${JSON.stringify(args)}`);
        var result = originalMethod.apply(this, args);
        console.info(`The return value is: ${result}`);
        return result;
    };
    return descriptor;
}
let Person = class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    showFullNameWithPrefix(prefix) {
        return `${prefix} ${this.firstName} ${this.lastName}`;
    }
};
__decorate([
    log
], Person.prototype, "showFullNameWithPrefix", null);
Person = __decorate([
    ctor
], Person);
var person = new Person("John", "Doe");
console.log(`Good afternoon, ${person.showFullNameWithPrefix("Mr.")}`);
console.log('...');
class PersonEntity {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    showFullNameWithPrefix(prefix) {
        return `${prefix} ${this.firstName} ${this.lastName}`;
    }
}
var specialPerson = new PersonEntity("Joanna", "Doe");
console.log(`Good afternoon, ${specialPerson.showFullNameWithPrefix("Mrs.")}`);
