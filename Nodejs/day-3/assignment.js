const EventEmitter = require("events");
const emitter = new EventEmitter();
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const eventCounts = {
  login: 0,
  logout: 0,
  purchase: 0,
  profileUpdate: 0,
};

const logFile = "eventLogs.json";

if (fs.existsSync(logFile)) {
  const data = fs.readFileSync(logFile, "utf-8");
  Object.assign(eventCounts, JSON.parse(data));
}

function saveCounts() {
  fs.writeFileSync(logFile, JSON.stringify(eventCounts));
}

emitter.on("login", (username) => {
  eventCounts.login++;
  console.log(`${username} logged in successfully.`);
  saveCounts();
});

emitter.on("logout", (username) => {
  eventCounts.logout++;
  console.log(`${username} logged out successfully.`);
  saveCounts();
});

emitter.on("purchase", (username, item) => {
  eventCounts.purchase++;
  console.log(`${username} purchased ${item}.`);
  saveCounts();
});

emitter.on("profileUpdate", (username) => {
  eventCounts.profileUpdate++;
  console.log(`${username}'s profile updated successfully.`);
  saveCounts();
});

emitter.on("summary", () => {
  console.log("Event Summary:");
  for (const [event, count] of Object.entries(eventCounts)) {
    console.log(`${event}: ${count}`);
  }
  saveCounts();
});

function askUser() {
  rl.question(
    "\nChoose an option:\n 1. Login\n 2. Logout\n 3. Purchase\n 4. Profile Update\n 5. Summary\n 6. Exit\nChoose One (1/2/3/4/5/6): ",
    (option) => {
      switch (option) {
        case "1":
          emitter.emit("login", "Swarnavo");
          askUser();
          break;
        case "2":
          emitter.emit("logout", "Swarnavo");
          askUser();
          break;
        case "3":
          emitter.emit("purchase", "Swarnavo", "Laptop");
          askUser();
          break;
        case "4":
          emitter.emit("profileUpdate", "Swarnavo");
          askUser();
          break;
        case "5":
          emitter.emit("summary");
          askUser();
          break;
        case "6":
          rl.close();
          break;
        default:
          console.log("Invalid option. Please choose a valid option.");
          askUser();
          break;
      }
    }
  );
}

console.log("Welcome to the Event Tracker!");
askUser();
