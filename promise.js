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
