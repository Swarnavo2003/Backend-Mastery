const fs = require("fs");

console.log("Hello from top level code"); // 1

setTimeout(() => {
  console.log("Hello from setTimeout callback - 1"); // 3 or 4
}, 0);

setImmediate(() => {
  console.log("Hello from setImmediate callback - 1"); // 4 or 3
});

fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data); // 5
});

console.log("Hello from top level code 2"); // 2
