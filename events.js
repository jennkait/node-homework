var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log("File created.");
}

var listener2 = function listener2(){
    console.log("File has been written to.");
}

var listener3 = function listener3(){
    console.log("File has been read.");
}

eventEmitter.addListener("connection", listener1);

eventEmitter.on("connection", listener2);

eventEmitter.on("connection", listener3);

eventEmitter.emit("connection");