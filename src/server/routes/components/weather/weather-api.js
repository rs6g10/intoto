const url = require('url');
const routes = require('express').Router();
const fetch = require('node-fetch');
const _ = require('lodash');
const constants = require('../../../constants');
const urlConstants = require('./weather.constants');
const getHttpResponse = require('../../../utils/http-utils').getHttpResponse;

const getWeatherByCity = (req, res) => {
    const url = `${urlConstants.baseUrl}?q=${req.params['city']}&units=metric&APPID=31010a864232d2113686992e1113019a`;
    getHttpResponse(res, url);
};

module.exports = {getWeatherByCity};




