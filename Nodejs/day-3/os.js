const os = require("os");

console.log("Architecture: ", os.arch());

console.log("Platform: ", os.platform());

console.log("Cores: ", os.cpus().length);

const freemem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
console.log(`Free memory: ${freemem}GB`);

const totalmem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
console.log(`Total memory: ${totalmem}GB`);

console.log("Hostname: ", os.hostname());

console.log("OS Type: ", os.type());
console.log("OS Release: ", os.release());

const uptime = os.uptime();
console.log(`System Uptime: ${Math.floor(uptime / 3600)} hours`);

/* 
const interfaces = os.networkInterfaces();
console.log("Network Interfaces:", interfaces);

Object.values(os.networkInterfaces()).forEach((net) => {
  net.forEach((interface) => {
    if (interface.family === "IPv4" && !interface.internal) {
      console.log("IP Address: ", interface.address);
    }
  });
});
*/

const user = os.userInfo();
console.log("Username: ", user.username);
console.log("Home Directory: ", user.homedir);

console.log("Home Directory: ", os.homedir());
console.log("Temporary Directory: ", os.tmpdir());

console.log("Endianness: ", os.endianness());

const EOL = os.EOL;
console.log(`First Line${EOL}Second Line`);
