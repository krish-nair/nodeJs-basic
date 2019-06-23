const url = require("url");

const address = "https://www.metservice.com/towns-cities/wellington/lower-hutt";

const printUrl = url.parse(address);

console.log(printUrl.host);
console.log(printUrl.query);
console.log(printUrl.port);
console.log(printUrl.protocol);
console.log(printUrl.pathname);
console.log(printUrl.slashes);
