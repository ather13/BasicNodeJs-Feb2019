const events = require("events");

const ee = new events.EventEmitter();

//registering event
ee.on("displayMessage",()=>{
    console.log("message displayed");
})

//raising event
ee.emit("displayMessage");