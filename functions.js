const { PRINT } = require("./helper");

function print() {
  console.log("Printing");
}
print();

const anotherPrint = () => {
  console.log("Printing");
};

anotherPrint();

//IIFE
(function () {
  console.log("IIFE1");
})();

(() => {
  console.log("IIFE2");
})();

//Anonymous function
const fn1 = function () {
  console.log("PRINTING");
};

PRINT("ANONYMOUS FN", fn1());

//Single line arrow function
const double = (num) => num * 2;
const triple = (num) => num * 3;
PRINT("DOUBLE", double(2));
PRINT("TRIPLE", triple(2));

//Higher Order Function - Type1
function callMe(callback) {
  callback();
}
callMe(() => {
  console.log("Function being passed as argument to another function");
});

//Higher Order Function - Type2
function multiplyBy(num) {
  return (data) => {
    return data * num;
  };
}

let twoMuliplier = multiplyBy(2);
let threeMuliplier = multiplyBy(3);
PRINT("TWO MULTIPLIER", twoMuliplier(10));
PRINT("THREE MULTIPLIER", threeMuliplier(10));

//CALL, APPLY, BIND

let person = {
  name: "Ravi",
  print: function (action) {
    console.log(`${this.name} is ${action}`);
  },
};

person.print("Reading");

function print(action1, action2) {
  console.log(`${this.name} is ${action1} and ${action2}`);
}

let jeeva = {
  name: "Jeeva",
};

let aswathy = {
  name: "Aswathy",
};

print("Reading", "Listening");

print.call(jeeva, "Reading", "Listening");
print.apply(aswathy, ["Reading", "Listening"]);

person.print.bind(jeeva)("Action1"); //Binding print function from person to jeeva
