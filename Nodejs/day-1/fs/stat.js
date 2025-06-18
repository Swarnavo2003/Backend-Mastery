const fs = require("fs");

fs.stat("file1.txt", (err, stats) => {
  if (err) throw err;
  console.log(stats.isFile(), stats.size); // 48bytes
});

const stats = fs.statSync("file2.txt");
console.log(stats.isFile(), stats.size); // 52 bytes
