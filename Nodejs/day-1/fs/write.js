const fs = require("fs");

// writeFile
fs.writeFile(
  "file1.txt",
  "This is a file created using fs.writeFile method",
  (error) => {
    console.log("Error writing file", error);
  }
);

// writeFileSync
fs.writeFileSync(
  "file2.txt",
  "This is a file created using fs.writeFileSync method"
);
