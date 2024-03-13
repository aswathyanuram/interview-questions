module.exports = {
  PRINT: function (title, ...args) {
    console.log("-------------------------------------------");
    console.log(title);
    args.forEach((arg) => {
      console.log(arg);
    });
  },
};
