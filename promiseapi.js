const promise = new Promise((resolve, reject) => {
  let isError = true;
  if (!isError) {
    resolve({ data: "DATA" });
  } else {
    reject(new Error("Something went wrong!!"));
  }
});

promise
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//Axios PROMISE LOGIC
const axios = require("axios");
let url = "https://dummyjson.com/products";

axios
  .get(url)
  .then((response) => {
    let data = response.data;
    console.log("AXIOS PROMISE:", data[0]);
  })
  .catch((error) => {
    console.error(error);
  });
