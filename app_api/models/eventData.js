var mongoose = require('mongoose');

var EventDataSchema = new mongoose.Schema({
    eventTitle: String,
    eventSummary: String,
    eventDate: Date,
    eventTimeStart: Number,
    eventTimeEnd: Number,
    eventPassed: Boolean
});

console.log("Reading Schemas");
mongoose.model('eventData', EventDataSchema, 'EventData');