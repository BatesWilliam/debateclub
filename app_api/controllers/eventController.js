var mongoose = require('mongoose');
var EventData = mongoose.model('eventData');

var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
};
console.log("Reading the Event Controller");

module.exports.EventFindAllItems = function(req,res){
    console.log("Finding all event records", req);
    
    EventData
                .find({})
                .exec(function(err, eventdata) {
                    if(err){
                        console.log(err);
                        sendJSONresponse(res,404,err);
                    }
                    console.log(eventdata);
                    sendJSONresponse(res,200,eventdata);
                });
};

module.exports.EventFindOneItem = function(req, res, next){
    
        var item = req.params.item;
        console.log("Successfully Accessed Event Controller");
        
        EventData.find({"item": item},{_id:0}, function (err, eventdatas){
            if(err){
                console.log("There was a Controller error");
                console.log(err);
                sendJSONresponse(res, 404, err);
                
            }else{
                console.log("Successful Controller connection");
                sendJSONresponse(res,200,eventdatas);
            }
        });
};
                
