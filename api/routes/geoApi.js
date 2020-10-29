var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	var recReq = unirest("GET", "http://api.opentripmap.com/0.1/en/places/geoname");
	recReq.query({
		"apikey": "5ae2e3f221c38a28845f05b6a260b905fe573a3614c4c0376c5796aa",
		//"country": "fr",
		"name": "Paris"
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