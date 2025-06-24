const path = require("path");

// console.log(__dirname);
// console.log(__filename);

console.log(path.basename("/Nodejs/day3/path.js"));
console.log(path.basename("/Nodejs/day3/path.js", ".js"));

console.log(path.dirname("/Nodejs/day3/path.js"));

console.log(path.extname("/Nodejs/day3/path.js"));

const fullPath = path.join("/users", "admin", "file.txt");
console.log(fullPath);
console.log(path.isAbsolute(fullPath));

console.log(path.resolve("users", "admin", "file.txt"));

console.log(path.relative(fullPath, "/users/user/file.txt"));

console.log(path.normalize(fullPath));

console.log(path.parse(fullPath));

console.log("Path Seperator: ", path.sep);
console.log("Path Delimiter: ", path.delimiter);
