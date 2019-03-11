var path = require("path");//It will load the PATH Module of NODE Js

var hello = "Hello World from Node JS";



console.log(__dirname);
console.log(__filename);
var justNode = hello.slice(17);
console.log(`Rock the world from ${justNode}`);
console.log(`Rock on World from ${path.basename(__filename)}`);
