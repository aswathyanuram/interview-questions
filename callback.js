//Example for Callback

function callMe(callback, timeInSeconds) {
  setTimeout(() => {
    callback();
  }, timeInSeconds * 1000);
}

callMe(1, 5);
