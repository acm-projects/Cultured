var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/:data', (req, res) => {
	var imgReq = unirest("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI");
	var data = req.params.data;
	imgReq.query({
		"pageSize": "3",
		"q": data,
		"autoCorrect": "false",
		"pageNumber": "1"
	});

	imgReq.headers({
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
		"x-rapidapi-key": "7efa98af87msh2b012faa31a1d15p1747fbjsn0dbadc96a0a2",
		"useQueryString": true
	});

	imgReq.end(function (response) {
		res.json({ data: response.body });
	});

});


module.exports = router;
