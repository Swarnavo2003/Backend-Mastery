const EventEmitter = require("events");
const emitter = new EventEmitter();
const uploader = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

emitter.emit("greet", "Swarnavo Majumder");

uploader.on("start", (fileName) => {
  console.log(`Upload started: ${fileName}`);
});

uploader.on("progress", (percent) => {
  console.log(`Upload progress: ${percent}%`);
});

uploader.on("end", () => {
  console.log("Upload Completed");
});

uploader.emit("start", "image.png");
uploader.emit("progress", 20);
uploader.emit("progress", 40);
uploader.emit("progress", 60);
uploader.emit("progress", 100);
uploader.emit("end");
