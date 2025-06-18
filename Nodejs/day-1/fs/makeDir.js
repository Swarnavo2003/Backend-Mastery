const fs = require("fs");

fs.mkdir("folder1", { recursive: true }, (err) => {
  if (err) throw err;
});

fs.mkdirSync("folder2", { recursive: true });
