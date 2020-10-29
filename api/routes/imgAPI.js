var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	var imgReq = unirest("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI");
	imgReq.query({
		"pageSize": "3",
		"q": "Statue of Liberty",
		"autoCorrect": "false",
		"pageNumber": "1"
	});

	imgReq.headers({
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
		"x-rapidapi-key": "7efa98af87msh2b012faa31a1d15p1747fbjsn0dbadc96a0a2",
		"useQueryString": true
	});

	imgReq.end(function (response) {
		if (response.error) throw new Error(response.error);
		console.log(response.body);
		res.json({ data: response.body });
	});

});


module.exports = router;
