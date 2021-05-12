// I have an id
interface InterfaceWithId {
  id: number;
}

// I am a class with an id
class MyClass7 implements InterfaceWithId {
  id: number;
  description: string;
}

// in this echo, the returned value is cast to IHasId
function nonGenericMethod(item: InterfaceWithId): InterfaceWithId {
  console.log(`Id is ${item.id}`);
  return item;
}

// in this echo, the returned value is cast to the type passed in
function genericMethod<T extends InterfaceWithId>(item: T): T {
  console.log(`Id is ${item.id}`);
  return item;
}

var myInstance = new MyClass7();
myInstance.id = 2;
myInstance.description = "This is my description.";

var nonGeneric = nonGenericMethod(myInstance); // type of nonGeneric is IHasId
// console.log(nonGeneric.description); // <-- issue, type is IHasId so no description

var generic = genericMethod(myInstance); // type of generic is MyClass
console.log(generic.description); // <-- works fine

// pass me something and return true or false
interface IPredicate<T> {
  (obj: T): boolean;
}

// find the first item in the list that satisfies a predicate
function findFirst<T>(list: T[], predicate: IPredicate<T>): T {
  for (let index = 0; index < list.length; index++) {
    if (predicate(list[index])) {
      return list[index];
    }
  }
  return;
}

var list: { key: number, value: string }[] = [];

list.push({ key: 1, value: "foo" });
list.push({ key: 2, value: "bar" });
list.push({ key: 3, value: "buzz" });
list.push({ key: 4, value: "brr" });
list.push({ key: 5, value: "bac" });


//----------------------------------

var result2 = findFirst(list, item => item.key === 3);
console.log(`Found result with value: ${result2?.value}`);


// intelliSense understands what item must look like based on the list
// furthermore, result2 is of type { key: number, value: string };

// find the first item in the list that satisfies a predicate
function findFirst2(list: any[], predicate: any) {
  for (let index = 0; index < list.length; index++) {
    if (predicate(list[index])) {
      return list[index];
    }
  }
  return;
}

var list2 = [{id: 1, key:1, value: '1'}]


var result1 = findFirst2(list2, item => item.key === 3);
console.log(`Found result with value: ${result2?.value}`);
