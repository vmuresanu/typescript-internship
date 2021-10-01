var objectWithIdentifier: { id: number } = { id: 1 };
//objectWithIdentifier.foo = 'x';
//objectWithIdentifier.id = '5';

interface IHaveAnIdentifier {
  id: number;
}

interface IHaveOneToo {
  id: number;
}

var myObject: IHaveOneToo = { id: 1 };

//myObject.foo = 'x';
//myObject.desc = 'description';

var myObjectToo: IHaveAnIdentifier = myObject;

function showId(obj: IHaveAnIdentifier): void {
  console.log(`Showing id: ${obj.id}`);
}

showId(myObject);
showId(myObjectToo);
showId({ id: 3.14 }); // <IHaveAnIdentifier>
//showId({id:42, foo: 'x'});

interface IHaveAnOptionalDescription {
  desc?: string;
}

interface IHaveIdAndMaybeDescription extends IHaveAnIdentifier, IHaveAnOptionalDescription {

}

function showDesc(obj: IHaveIdAndMaybeDescription): void {
  if (obj.desc) {
    console.log(obj.desc);
  }
}

var myObjectWithDescription: IHaveIdAndMaybeDescription = {
  id: 1974,
  desc: "Rock it!",
};

showDesc(myObject);
showDesc(myObjectWithDescription);

// I am a function: f(a, b)
interface PowerFunction {
  (a: number, b: number): number;
}

var powerOf: PowerFunction = function (a, b) {
  return a ** b;
};

console.log(powerOf(3, 4));
console.log(powerOf(4, 3));
