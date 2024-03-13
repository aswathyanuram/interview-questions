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

console.log("INITIAL DATA", data);
console.log("DOUBLED DATA", doubled);
console.log("FILTERED EVEN DATA", filteredEven);
console.log("DATA FIND", dataFind);
console.log("CONCAT RESULT", data, newArr);
console.log("JOINED ARRAY", joinedArr);
console.log("SLICED ARRAY", slicedArray);
