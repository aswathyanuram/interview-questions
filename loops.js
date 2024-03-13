const { PRINT } = require("./helper");

let data = [1, 2, 3, 4, 5];

PRINT("FOR EACH");
data.forEach((item) => {
  console.log("ITEM IN ARR", item);
});

PRINT("FOR NORMAL");
for (let i = 0; i < data.length; i++) {
  console.log("ITEM IN ARR", data[i]);
}

PRINT("WHILE");
let j = 0;
while (j < data.length) {
  console.log("ITEM IN ARR", data[j]);
  j++;
}

PRINT("DO WHILE");
let k = 0;
do {
  console.log("ITEM IN ARR", data[k]);
  k++;
} while (k < data.length);
