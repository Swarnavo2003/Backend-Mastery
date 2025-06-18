const fs = require("fs");

fs.readdir("folder1", (err, files) => {
  if (err) throw err;
  console.log(files);
});

const files = fs.readdirSync("folder2");
console.log(files);
