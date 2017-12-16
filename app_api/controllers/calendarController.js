var request = require('request');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(JSON.parse(content));
    //res.json(content);
};


/* GET all API Key Values Values */
module.exports.FindCalendar = function(req, res)
{
    console.log("Retrieving Key Store Values");
    
    var CalendarAPI = process.env.CALENDAR_API;
    console.log(CalendarAPI);
    
    var PublicAPI = process.env.PUBLIC_API_KEY;
    console.log(PublicAPI);
  
var options = { method: 'GET',
  url: 'https://www.googleapis.com/calendar/v3/calendars/' + CalendarAPI + '/events?key=' + PublicAPI,
  headers: 
   { /*'Postman-Token': 'c0cc2c91-49b6-cb93-d457-0f68fb210bea',
     'Cache-Control': 'no-cache',
     Accept: 'application/json',
     'X-App-Id': process.env.R6DB_XAPPID*/ } };


    
    request(options, function(error, response, body){
        console.log(body);
        sendJSONresponse(res, "200", body); 
    });

}