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
	recReq.end(function (response) {
		if (response.error) throw new Error(response.error);
		console.log(response.body);
		res.json({ data: response.body });
	});

});


module.exports = router;