const { Readable, Writable } = require("stream");

const readableStream = new Readable({
  highWaterMark: 10,
  read() {},
});

const writableStream = new Writable({
  write(chunk) {
    console.log("Writing", chunk.toString());
  },
});

readableStream.on("data", (chunk) => {
  // console.log("Data is coming", chunk);
  writableStream.write(chunk);
});

console.log(readableStream.push("Hello"));
