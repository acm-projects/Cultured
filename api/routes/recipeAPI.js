var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/:cuisine', (req, res) => {
	var recReq = unirest("GET", "https://api.spoonacular.com/recipes/random");
	var cuisine = req.params.cuisine;
	recReq.query({
		"apiKey": "7662bab9f8254d1ea497a542d7c8e4e5",
		"limitLicense": "true",
		"tags": cuisine,

		"number": "3"
	});

	recReq.headers({
		"Content-Type": "application/json"

	});
	recReq.end(function (response) {
		res.json({ data: response.body });
	});

});


module.exports = router;