var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/:lat/:lon', (req, res) => {
	var lat = req.params.lat, lon = req.params.lon;
	var url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=" + lat + "%2C" + lon + "&locationRadius=50mi&type=video&key=AIzaSyAjJalQuUjPr8hxyFLk3uCxuPNt4HOia6A"
	var recReq = unirest("GET", url);
	
	recReq.query({
		//"part": "snippet",
		//"location": "21.5922529,-158.1147114",
		//"locationRadius": "50mi",
		//"type": "video:",
		//"key": "AIzaSyAjJalQuUjPr8hxyFLk3uCxuPNt4HOia6A"
	});
	
	recReq.headers({
		"Accept": "application/json"
	});
	recReq.end(function (response) {
		if (response.error) throw new Error(response.error);
		console.log(response.body.items[0].snippet.title);
		res.json({ data: response.body });
	});

});


module.exports = router;