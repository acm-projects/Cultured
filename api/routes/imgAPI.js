var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	var imgReq = unirest("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI");
	imgReq.query({
		"pageSize": "10",
		"q": "canada",
		"autoCorrect": "false",
		"pageNumber": "1"
	});

	imgReq.headers({
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
		"x-rapidapi-key": "7efa98af87msh2b012faa31a1d15p1747fbjsn0dbadc96a0a2",
		"useQueryString": true
	});

	imgReq.end(function (res) {
		if (res.error) throw new Error(res.error);
		console.log(res.body);
		return res.body;
	});

});


module.exports = router;
