const fs = require("fs");

//Creating and writing in a file
// fs.writeFile("hello.txt", "Hello Node js", err => {
//   if (err) throw err;
//   console.log("file has been written");
// });

//Reading from a file
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
