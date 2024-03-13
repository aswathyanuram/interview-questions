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
