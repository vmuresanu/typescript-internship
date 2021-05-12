// keyOf operator
type Car = { id: number; year: number, make: string };
type CarKeys = keyof Car;


//------------------------------
// typeOf operator
let s = "hello";
let n: typeof s;


type SomeFunction = (x: string) => boolean;
type Result = ReturnType<SomeFunction>;

function f() {
  return { x: 10, y: '3' };
}
type Type6 = ReturnType<typeof f>;

//------------------------------
//Indexed Access Types
type Person = { age: number; name: string; alive: boolean; };
type Age = Person["age"];

type I1 = Person["age" | "name"];

type I2 = Person[keyof Person];

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];

//------------------------------
// Conditional Types
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;
//------------------------
interface Id {
  id: number
}

interface Name {
  name: string
}

type IdOrName<T extends Id | Name> = T extends Id ? number : string

let a: IdOrName<{id: 1}>

//------------------------------
//Mapped Types

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

// -----------------------------------

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: number;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type ActualUser = Concrete<MaybeUser>

// Remove the 'kind' property
type RemoveIdField<Type> = {
  [Property in keyof Type as Exclude<Property, "id">]: Type[Property]
};

interface Circle {
  id: number;
  radius: number;
}

type IdlessCircle = RemoveIdField<Circle>;


type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

// ----------------------- partial
interface StudentInterface {
  id: number;
  name: string;
  age: number;
}

let student: Partial<StudentInterface> = { id: 1 }





























type User = RemoveIdField<CreateMutable<Concrete<MaybeUser>>>;





















/*HW
1. Create an interface Id that has property id of number
2. Create an interface Name that has property name of string
3. Create a new type IdOrName and pass in a generic type
* If passed in type extends Id, IdOrName - will be of type number
* Else if passed in type extends Name, IdOrName - will be of type string
 */

/*interface Id {
  id: number
}
