// let vs var
// also: use ES6 for contrast
var app = () => {

  var withVar = () => {
    for (var index: number = 0; index < 10; index += 1) {
      setTimeout(() => console.log(`var idx = ${index}`), 0);
      console.log(`var index withOutSetTimeOut = ${index}`);
    }
  }

  var withLet = () => {
    for (let index: number = 0; index < 10; index += 1) {
      setTimeout(() => console.log(`let index = ${index}`), 0);
      console.log(`let index withOutSetTimeOut = ${index}`);
    }
  }

  withVar();
  withLet();
}
setTimeout(app, 0);

const maxRows = 1000;
//maxRows = 12;
if (100 < maxRows) {
  console.log(`It is within range!`);
}
