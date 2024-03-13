//Example for Callback

function callMe(callback, timeInSeconds) {
  setTimeout(() => {
    callback();
  }, timeInSeconds * 1000);
}

callMe(() => {
  console.log("CALLBACK CALLED!!!");
}, 5);
