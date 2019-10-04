const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's your name?", function(name) {
    rl.question("Where are you from?", function(country){
        console.log('${name}, is a citizen of ${country}');
        rl.close();
    });
});