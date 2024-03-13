//Example for Closure

function logger(type) {
  let date = new Date().toUTCString();
  return function (data) {
    console.log(`${type}-${date}-${data}`);
  };
}

const errorLogger = logger("ERROR");
const debugLogger = logger("DEBUG");
const infoLogger = logger("INFO");

errorLogger("This is Error");
debugLogger("This is Debug");
infoLogger("This is Info");
