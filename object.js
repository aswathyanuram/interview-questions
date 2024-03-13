const { PRINT } = require("./helper");

const person = {
  name: "Aswathy",
  role: "Developer",
  area: "Chennai",
  noOfProjects: 5,
};

PRINT("Object", person);

PRINT("All Keys", Object.keys(person));

PRINT("All Values", Object.values(person));

PRINT("ACCESSING OBJECT", person.name, person["role"]);
let key = "area";
PRINT("ACCESSING OBJECT DYNAMIC", person[key]);

PRINT("USING IN OPERATOR for Objects");
for (let key in person) {
  console.log("KEY", key);
  console.log("VALUE", person[key], "\n");
}
