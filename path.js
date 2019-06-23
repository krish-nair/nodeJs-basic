const path = require("path");

const fileLocation = path.join(__dirname, "node-join.txt");

const fileName = path.basename(fileLocation);

const fileExt = path.extname(fileName);
console.log(fileExt);
