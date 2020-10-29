var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	var recReq = unirest("GET", "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list");
	recReq.query({
		"key": "AIzaSyAjJalQuUjPr8hxyFLk3uCxuPNt4HOia6A",
		"part": "snippet",
		"regionCode": "es",
		"type": "video:",
		"chart": "mostPopular"
	});

	recReq.headers({
		"Content-Type": "application/json"
	});
	recReq.end(function (response) {
		if (response.error) throw new Error(response.error);
		console.log(response.body);
		res.json({ data: response.body });
	});

});


module.exports = router;