const { PRINT } = require("./helper");

const data = [1, 2, 3, 4, 5];

let doubled = data.map((item) => {
  return item * 2;
});

let filteredEven = data.filter((item) => {
  let isEven = item % 2 == 0;
  return isEven;
});

let dataFind = data.find((item) => {
  return item == 2;
});

let newArr = data.concat([6, 7, 8, 9, 10]);

let joinedArr = data.join("-|-");

let slicedArray = data.slice(0, 2);

PRINT("INITIAL DATA", data);
PRINT("DOUBLED DATA", doubled);
PRINT("FILTERED EVEN DATA", filteredEven);
PRINT("DATA FIND", dataFind);
PRINT("CONCAT RESULT", data, newArr);
PRINT("JOINED ARRAY", joinedArr);
PRINT("SLICED ARRAY", slicedArray);
