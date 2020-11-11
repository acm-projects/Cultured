var unirest = require("unirest");
var express = require('express');
var router = express.Router();


router.get('/:country', (req, res) => {
	var newsReq = unirest("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI")
	var data = req.params.country;
	newsReq.query({
		"toPublishedDate": "null",
		"fromPublishedDate": "null",
		"pageSize": "3",
		"autoCorrect": "false",
		"q": data,
		"pageNumber": "1"
	});

	newsReq.headers({
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
		"x-rapidapi-key": "7efa98af87msh2b012faa31a1d15p1747fbjsn0dbadc96a0a2",
		"useQueryString": true,
		"Content-Type": "application/json"
	});

	
	 newsReq.end(function (response) {
		 res.json({ data: response.body });
	 });
	 
});



module.exports = router;