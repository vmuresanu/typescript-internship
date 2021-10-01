// keyOf operator
type Car = { id: number; year: number, make: string };
type CarKeys = keyof Car;

//------------------------------
// typeOf operator
let s: any;
let n: typeof s;

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

type IdOrName<T extends Id | Name> = T extends Id ? number : boolean

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
  readonly id: string;
  readonly name?: string;
  readonly age?: number;
};

type ActualUser = Concrete<MaybeUser>

//-------------------------------------------------
// Remove the 'id and unit' property
type RemoveIdField<Type> = {
  [Property in keyof Type as Exclude<Property, 'id' | 'unit'>]: Type[Property]
};

interface Circle {
  id: number;
  radius: number;
  unit: string;
  color: string;
  border: string;
  padding: string;
}

type IdlessCircle = RemoveIdField<Circle>;

//-------------------------------------------------
type ExtractIdField<Type> = {
  [Property in keyof Type as Extract<Property, 'id' | 'unit'>]: Type[Property]
};

type ExtractedCircle = ExtractIdField<Circle>;
type Ext = ExtractIdField<RemoveIdField<Circle>>
//-------------------------------------------------
// Create a new Type that has the same properties

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type MappedDBFields = ExtractPII<DBFields>;

// ----------------------- partial

