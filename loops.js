let data = [1, 2, 3, 4, 5];

data.forEach((item) => {
  console.log("ITEM IN ARR", item);
});

for (let i = 0; i < data.length; i++) {
  console.log("ITEM IN ARR", data[i]);
}

let j = 0;
while (j < data.length) {
  console.log("ITEM IN ARR", data[j]);
  j++;
}

let k = 0;
do {
  console.log("ITEM IN ARR", data[k]);
  k++;
} while (k < data.length);
