//Creating PROMISE
function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "SUCCESS" });
    }, 2000);
  });
}

//PROMISE
createPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

//ASYNC AWAIT
(async function () {
  try {
    const data = await createPromise();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
