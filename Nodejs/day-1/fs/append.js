const fs = require("fs");

// readFile
fs.appendFile(
  "file1.txt",
  "\nappended a new line using fs.appendFile",
  (err) => {
    if (err) throw err;
  }
);

// readFileSync
fs.appendFileSync("file2.txt", "\nappended a new line using fs.appendFileSync");
