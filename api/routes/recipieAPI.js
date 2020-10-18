var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	var recReq = unirest("GET", "https://api.spoonacular.com/recipes/random");
	recReq.query({
		"apiKey": "7662bab9f8254d1ea497a542d7c8e4e5",
		"limitLicense": "true",
		"tags": "chinese",
		"number": "2"
	});

	recReq.headers({
		"Content-Type": "application/json"

	});
	recReq.end(function (res) {
		if (res.error) throw new Error(res.error);
		console.log(res.body);
		return res.body;
	});

});


module.exports = router;