


## Node JS 
This prjoect would provide the details about NODE JS. Starting from the history background, we would be able to dive through all the features that NODE JS provides.



### What is NODE.Js?

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.

It was created by Ryan Dahl and other developers in 2009.



### Node Core ###

**The Global Object** - Like in JavaScript we have "windows" object that is globally available, NODEJs also 
has some Global Objects that can be accessible from any location of NODEJS project. All these listed objects in the link (https://nodejs.org/api/globals.html) would be available and accessible anywhere in the project without having to require anything. This is because all the listed objects in the link are part of the global namespace.

```
//FileName - global.js
console.log("Hello Bhopal");
global.console.log("Hello Singh");

//Go to the terminal and run command
node global.js

//Output
Hello Bhopal
Hello Singh

console.log(__dirname);
console.log(__filename);

//Output
G:\Udemy\MERN\node-js-essential
G:\Udemy\MERN\node-js-essential\global.js

```


**The Process Object**
One important object that is available to us globally is the process object. It can be access from anywhere and it contains the functionality that allow us to interact with information about the current process instance. We can use process object to get environment information, read environment variable, communicate with the terminal, or parent processes through standard input or standard output, we can even exit the current process. In short, it gives us everything related to current process instance. All these values would be stored in **process.env** which stands for the argument variables used to start the process.

```js
console.log(process.argv);
//output

G:\Udemy\MERN\node-js-essential>node app.js
[ 'C:\\Program Files\\nodejs\\node.exe',
  'G:\\Test\\MERN\\node-js-essential\\app.js' ]

```

We can inercept all the variables passed to the command options

```js
function grab(flag) {
    var index = process.argv.indexOf(flag);
    return index === -1 ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if(!user || !greeting) {
    console.log("You Blew it!");
} else {
    console.log(`Weclomce ${user}, ${greeting}`);
}

//OUTPUT
Weclomce Bhopal, Good Day
```


**Standard Input/Standart Output Object** - These two objects offer us a way to communicate with a process
while it is running. For now we will use these objects to read and write data to the terminal. It can also 
be used to communicate with the child process.

```js


var questions = [
    "What is your name?",
    "What is your fav hobby?",
    "what is your preferred programming language?"

]

var answers = [];

//stdout
function ask(i) {
    process.stdout.write(`${questions[i]}`);
    process.stdout.write("  > ");
}

//stdin
process.stdin.on('data', function(data){
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function(){
    process.stdout.write("  ALL DONE!!! ");
}

```


**Global Timing Functions**
 - setInterval Method




 ### Node Modules###
  - require()
  - path
  - v8

  ```js
    var path = require('path');
    var util = require('util');
    var v8 = require('v8');
  ```

  **ReadLine()** - It uses to ask questions to our terminal user.

  ```js
    var readline = require('readline');
    var rl = readline.createInterface(process.stdin, process.stdout);
```
Once inteface is registered, we can use prompt method to capture user input and output

```js
    rl.question("What is the name of a real person? ", function(answer) {

        realPerson.name = answer;

        rl.setPrompt(`What would ${realPerson.name} say? `);

        rl.prompt();

        rl.on('line', function(saying) {

            realPerson.sayings.push(saying.trim());

            if (saying.toLowerCase().trim() === 'exit') {
                rl.close();
            } else {
                rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
                rl.prompt();
            }

        });

    });


    rl.on('close', function() {

        console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
        process.exit();
        
    });
```
