const router = require('express').Router();
const weatherApi = require('./weather-api');

router.get('/weather/:city', (req, res) => weatherApi.getWeatherByCity(req,res));

module.exports = router;
