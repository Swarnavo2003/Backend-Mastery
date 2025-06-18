const fsPromises = require("fs/promises");

/* Read the text from an existing file */
async function read() {
  const data = await fsPromises.readFile("file3.txt", "utf-8");
  console.log(data);
}
read();

/* Write something to an existing file or if the file dosen't exists create the file then write to it */
async function write(text) {
  await fsPromises.writeFile("file3.txt", text);
}
write("This is a file created using fs promises");

/* Append something to existing file*/
async function update(text) {
  await fsPromises.appendFile("file3.txt", text);
}
update("\nThis is the appended content using fs promises");

/* Delete a file */
async function unlink() {
  await fsPromises.unlink("file3.txt");
}
unlink();
