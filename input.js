var fs = require("fs");

fs.readFile("input2.js", function (err,data){
    if (err){
        return console.error(err);
    }
    console.log("Asychronous read:" + data.toString());
});