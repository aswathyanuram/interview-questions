const axios = require("axios");
let url = "https://dummyjson.com/products";

//Fetch API using ASYNC AWAIT
(async function () {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log("AXIOS ASYNC:", data.products[0]);
  } catch (error) {
    console.error(error);
  }
})();
