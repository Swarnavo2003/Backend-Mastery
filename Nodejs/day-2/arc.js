const crypto = require("crypto");
const os = require("os");

console.log(`CPU Count: ${os.cpus().length}`);

let start = Date.now();

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});
