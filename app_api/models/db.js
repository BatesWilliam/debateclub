var mongoose = require('mongoose');

var connectionstring = process.env.MONGO_DEBATE_KEY;
mongoose.connect(connectionstring, { useMongoClient: true});
console.log("Database Initialized");
console.log("Reticulating Splines");

mongoose.Promise = global.Promise;

//Bring in your schmas ^ models
require('./eventData');