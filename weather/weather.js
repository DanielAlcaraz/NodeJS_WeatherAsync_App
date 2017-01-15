const request = require('request')

const getWeather = (lat, lng, callback) => {
	request({
		url:`https://api.darksky.net/forecast/c8b16ef9753d9401482bb62f3854b46e/${lat},${lng}`,
		json: true
	}, (err,response,body) => {
		if(err) {
			callback('Unable to connect to forcast.io server.');
		} else if(response.statusCode === 400) {
			callback('Unable to fetch weather.');
		} else if (!err && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
	});
};

module.exports.getWeather = getWeather;