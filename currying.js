function outer(data1) {
  return function (data2) {
    return function (data3) {
      console.log("INNNNEEEEER FUNCTION: ", data1, data2, data3);
    };
  };
}

const outer1 = outer("ONE");
const outer2 = outer1("TWO");
outer2("THREE");

//Currying Example
f(x,y,z) = f(x) * f(y) * f(z)