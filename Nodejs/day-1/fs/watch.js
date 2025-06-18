const fs = require("fs");

fs.watch("file1.txt", (eventType, filename) => {
  console.log(`Event: ${eventType} on file: ${filename}`);
});

fs.watch("file2.txt", (eventType, filename) => {
  console.log(`Event: ${eventType} on file: ${filename}`);
});
