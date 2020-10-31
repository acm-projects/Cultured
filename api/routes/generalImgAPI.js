var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/:search', (req, res) => {
	var search = req.params.search;
	var url = "https://bing-image-search1.p.rapidapi.com/images/search";
	var recReq = unirest("GET", url);

	recReq.query({
		"q": search,
		"count": "1"
		//"locationRadius": "50mi",
		//"type": "video:",
		//"key": "AIzaSyAjJalQuUjPr8hxyFLk3uCxuPNt4HOia6A"
	});

	recReq.headers({
		"x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
		"x-rapidapi-key": "7efa98af87msh2b012faa31a1d15p1747fbjsn0dbadc96a0a2",
		"useQueryString": true,
		"Accept": "application/json"
	});
	recReq.end(function (response) {
		if (response.error) throw new Error(response.error);
		console.log(response.body);
		res.json({ data: response.body });
	});

});


module.exports = router;
