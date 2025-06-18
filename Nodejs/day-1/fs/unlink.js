const fs = require("fs");

// unlink
fs.unlink("newfile1.txt", (err) => {
  if (err) throw err;
});

// unlickSync
fs.unlinkSync("newfile2.txt");
