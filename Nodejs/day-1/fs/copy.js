const fs = require("fs");

fs.copyFile("newFile1.txt", "newFile2.txt", (err) => {
  if (err) throw err;
});

fs.copyFileSync("newFile1.txt", "newFile2.txt");
