// 1st method
/* 
const { ADMIN, PI, Platform, Tags, Schedule } = require("./math");
console.log(ADMIN, PI, Platform, Tags, Schedule);
*/

// 2nd method
/* 
const math = require("./math");
console.log(math.ADMIN, math.PI, math.Platform, math.Tags, math.Schedule);
*/

// If module.exports is an array
const math = require("./math");
console.log(math[0], math[1], math[2], math[3], math[4], math[5](5, 10));

const [ADMIN, PI, Platform, Tags, Schedule, add] = require("./math");
console.log(ADMIN, PI, Platform, Tags, Schedule, add(5, 10));
