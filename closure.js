//Example1 for Closure

function logger(type) {
  let date = new Date().toUTCString();
  return function (data) {
    console.log(`${type}-${date}-${data}`);
  };
}

const errorLogger = logger("ERROR");
const debugLogger = logger("DEBUG");
const infoLogger = logger("INFO");

errorLogger("This is Error");
debugLogger("This is Debug");
infoLogger("This is Info");

//Example2 for Closure
function multiplyBy(num) {
  return (data) => {
    return data * num;
  };
}

let twoMuliplier = multiplyBy(2);
let threeMuliplier = multiplyBy(3);
PRINT("TWO MULTIPLIER", twoMuliplier(10));
PRINT("THREE MULTIPLIER", threeMuliplier(10));
