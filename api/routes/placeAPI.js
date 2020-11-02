var unirest = require("unirest");
var express = require('express');
var router = express.Router();

router.get('/:lat/:lon', (req, res) => {
	var recReq = unirest("GET", "http://api.opentripmap.com/0.1/en/places/radius");
	var lat = req.params.lat, lon = req.params.lon;
	recReq.query({
		"apikey": "5ae2e3f221c38a28845f05b6a260b905fe573a3614c4c0376c5796aa",
		"radius": "10000",
		"lon": lon,
		"lat": lat,
		"rate": "3",
		"limit": "4",
		"format": "json"
	});

	recReq.headers({
		"Content-Type": "application/json"

	});
	recReq.end(function (response) {
		res.json({ data: response.body });
	});

});


module.exports = router;
