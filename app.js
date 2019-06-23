/**Instead of everything is wrapped by 'window' in js, in node we use module. every file we create a module in node
 * which we can export or import. The module wrapper:
 * (function (exports, require, module, __filename, __dirname){
 * //Module code actually lives here...
 * }); */

//Importing the module:
const userInfo = require("./sayHello");

userInfo.sayName();
userInfo.sayAddress();
