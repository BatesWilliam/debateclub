var express = require('express');
var router = express.Router();
var ctrlEventData = require('../controllers/eventController.js');

// REPLACE WITH GOOGLE CALENDARS

//var ctrlCalendar = require('../controllers/calendarController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Debate Club' });
});

router.get('/eventData/:item', ctrlEventData.EventFindOneItem);
router.get('/eventData', ctrlEventData.EventFindAllItems);

//API

// REPLACE WITH GOOGLE CALENDARS

//router.get('/rankeddata/:id', ctrlrank.FindRank);
module.exports = router;
