const request = require('request');

request({
	url: 'http://maps.googleapis.com/maps/api/geocode/json?address=08398%20Francoli%20Spain',
	json: true
}, (err, response, body) => {
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
	console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});