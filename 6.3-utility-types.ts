// Partial<Type>
interface StudentInterface {
  id: number;
  name: string;
  age: number;
}

let student: Partial<StudentInterface> = { id: 1 };

// Return Type

type SomeFunction = (x: string) => boolean;
type Result = ReturnType<SomeFunction>;

function f() {
  return { x: 10, y: '3' };
}
type Type6 = ReturnType<typeof f>;
