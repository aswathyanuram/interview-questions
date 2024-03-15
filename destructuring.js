const person = {
  name: "Jeeva",
  role: "Developer",
};

console.log(person.name, person.role);

//Object Destructuring
const { name, role } = person;
console.log(name, role);

//Array Destructuring
const arr = [1, 2, 3, 4, 5];
const [one, two] = arr;

console.log(one, two);

//Array Destruring using REST OPERATOR
let newArr = [1, 2, 3, 4, 5];
const [first, ...rest] = newArr;
console.log(first, rest);
