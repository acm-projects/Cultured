var unirest = require("unirest");
var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
	var newsReq = unirest("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI")
	newsReq.query({
		"toPublishedDate": "null",
		"fromPublishedDate": "null",
		"pageSize": "1",
		"q": "canada",
		"autoCorrect": "false",
		"pageNumber": "1"
	});

	newsReq.headers({
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
		"x-rapidapi-key": "7efa98af87msh2b012faa31a1d15p1747fbjsn0dbadc96a0a2",
		"useQueryString": true,
		"Content-Type": "application/json"
	});

	
	 newsReq.end(function (response) {
		 if (response.error) throw new Error(response.error);
		 console.log(response.body);
		 res.json({ data: response.body });
	 });
	 
});



module.exports = router;