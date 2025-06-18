const fs = require("fs");

fs.rm("folder1", { recursive: true }, (err) => {
  if (err) throw err;
});

fs.rmSync("folder2", { recursive: true, force: true });
