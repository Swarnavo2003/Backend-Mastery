const fs = require("fs");

// renameFile
fs.rename("file1.txt", "newFile1.txt", (err) => {
  if (err) throw err;
});

// writeFileSync
fs.renameSync("file2.txt", "newFile2.txt");
