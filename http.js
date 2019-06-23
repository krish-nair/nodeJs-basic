//this http module allows us to create a server
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  }
  if (req.url === "/user") {
    res.write("Welcome John to the user dashboard");
    res.end();
  }
});

server.listen(3000, () => console.log("Server is running and up..."));
