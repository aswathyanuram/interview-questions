//REST OPERATOR
function print(...data) {
  console.log(data);
}
print(1, 2, 3, 4, 5);

//SPREAD OPERATOR
function printMany(one, two, three) {
  console.log(one, two, three);
}
let data = [1, 2, 3];
printMany(...data);
