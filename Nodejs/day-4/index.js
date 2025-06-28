const http = require("http");
const fs = require("fs");
const { Transform, pipeline } = require("stream");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //! 1. Reading files using streams
    /* 
    const readableStream = fs.createReadStream("./sample.txt");
    readableStream.pipe(res);
    */
    //! 2. Writing files using streams
    /* 
    const readableStream = fs.createReadStream("./sample.txt");
    const writeStream = fs.createWriteStream("./output.txt");
    readableStream.on("data", (chunk) => {
      // console.log("Chunck : ", chunk);
      writeStream.write(chunk.toString());
    });
    res.end("Copying Complete");
    */

    //! String Processing
    const sampleFileStream = fs.createReadStream("./sample.txt");
    const outputWritableStream = fs.createWriteStream("./output.txt");
    const transformStream = new Transform({
      transform(chunk, encoding, callback) {
        const replaceWord = chunk
          .toString()
          .replaceAll(/Swarnavo/gi, "Kyojin")
          .toUpperCase();

        callback(null, replaceWord);
      },
    });
    // sampleFileStream.pipe(transformStream).pipe(outputWritableStream);

    pipeline(
      sampleFileStream,
      transformStream,
      outputWritableStream,
      (error) => {
        console.log(error);
      }
    );
    res.end("String Processing Complete");
  } else {
    res.end("Error - 404 Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
