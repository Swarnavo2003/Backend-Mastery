const fs = require("fs");

// readFile
fs.readFile("file1.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Error writing file", error);
  }
  console.log(data);
});

// readFileSync
const data = fs.readFileSync("file2.txt", "utf-8");
console.log(data);
