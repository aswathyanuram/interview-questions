fetch("https://dummyjson.com/products")
  .then((response) => {
    response
      .json()
      .then((data) => {
        console.log(data.products[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {});

(async function () {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products[0]);
  } catch (error) {
    console.error(error);
  }
})();
