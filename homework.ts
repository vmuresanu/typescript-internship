// EX 1 -----------------------------------

interface Entity {
  readonly id?: string;
  readonly name?: string;
  readonly age?: number;
  readonly ethnicity?: string;
}

// Given following interface do the following operations:
// Remove - 1. readonly, 2. optional type and 3. id property & ethnicity property
// do this as 3 separate mutation types
// create a mapper function that maps response type of all keys to boolean

// expected:
// type newType = A<B<C<D<Type>>>>
/*
  {
    name: boolean;
    age: boolean;
  }
*/

type ModifiersWrite<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type ModifiersOptional<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type ModifiersAge<Type> = {
  [Property in keyof Type as Exclude<Property, 'id'>]: Type[Property];
};

type ModifiersEthnicity<Type> = {
  [Property in keyof Type as Exclude<Property, 'ethnicity'>]: Type[Property];
};

type ModifiersBoolean<Type> = {
  [Property in keyof Type]: boolean;
};

type ModifiedEntity = ModifiersWrite<ModifiersOptional<ModifiersAge<ModifiersEthnicity<Entity>>>>

type EntityBoolean = ModifiersBoolean<ModifiedEntity>


// EX 2 ------------------------------------------------
/*
/*HW
1. Create an interface Id that has property id of type number
2. Create an interface Name that has property name of type string
3. Create a new type IdOrName and pass in a generic type
* If passed in type extends Id, IdOrName - will be of type number
* Else If passed in type extends Name, IdOrName - will be of type string
* Else passed in type extends Anything Else, IdOrName - will be of type {age: boolean}
 */

interface Id {
  id: number
}

interface Name {
  name: string
}

type IdOrName <T extends number | string> = T extends number
  ? Id
  : T extends string
  ? Name
  : { age: boolean }

// EX 3 ------------------------------------------------
/*
 Write a detailed explanation with images || steps || words how ex 5 withLet function works and why did we get the expected result
 */

// EX 4 ------------------------------------------------
//Having two interfaces:
/*interface User {
  id: number;
  name: string;
  age: number;
}

interface Car {
  id: number;
  color: string;
  numberOfDoors: number;
}

Replicate an API response that will have the following structure:
{
  data: {
    [any keys of string type]: Generic type;
    pagination: number;
  }
  errors: string[]
}
*/

interface User {
  id: number;
  name: string;
  age: number;
}

interface Car {
  id: number;
  color: string;
  numberOfDoors: 2 | 3;
}

type Res<Type> = {
  data: {
    [Property in keyof Type extends Car ? 'users' : 'cars'] : Type[]
  } & { pagination : number }
  errors: string[];
};

const data: Res<Car> = {
  data: {
    cars: [
      { id: 1, color: "Honda", numberOfDoors: 2 }, 
      { id: 2, color: "BMW", numberOfDoors: 3 }
    ],
    pagination: 2
  },
  errors:['err1', 'err2']
}

// EX 5 ------------------------------
// Write a class decorator, method decorator and parameter decorator functions for any Class the logic inside each decorator is up to you e.g.:
/*
@ClassDecorator
class SomeClass {

  @PropertyDecorator
  property1: string;

  @MethodDecorator(PASS_SOME_ENUM)
  someMethod(@ParameterDecorator someParameter: number) {
    // If PASS_SOME_ENUM value === 0 => Print parameter decorator value + some text from @ParameterDecorator
    // Else Print parameter decorator value * 50 + some text from @ParameterDecorator
    console.log('this is our message');
  }
}
 */
