var x = 50; // outside everything

var app = () => {

  // handling this
  x = 32;
  this.x = 12;

  // iterations as an old school function
  function functionIterations() {
    var index: number;
    console.log(this.x)

    for (index = 0; index < 10; index += 1) {
      this.x += 1;
      console.log(`function_x: ${this.x}`);
      // nested function
      setTimeout(function () {
        console.log(`setTimeOut function: ${this.x}`);
      }, 0);
    }

  }

  // iterations as a arrow function
  var arrowIterations = () => {
    var index: number;

    for (index = 0; index < 10; index += 1) {
      this.x += 1;
      console.log(`arrow_x: ${this.x}`);
      // nested lambda expression
      setTimeout(() => console.log(`setTimeOut arrow function: ${this.x}`), 0);
    }

  };

  // try it old school
  functionIterations();

  // now with arrow
  arrowIterations();
};

app();
console.log(x, '1111')
// call the whole file


