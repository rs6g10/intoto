const fetch = require('node-fetch');
const _ = require('lodash');
const newsSourcesUrl = 'https://newsapi.org/v1/sources';

let newsSources = {};
const getNewsSources = (res) => {
    if (newsSources.length > 0) {
        res.json(newsSources);
    }
    fetch(newsSourcesUrl)
        .then((res) => res.json())
        .then((json) => {
            newsSources = json;
            res.json(json);
        });
};

const getNewsCategories = (res) => {
    if (newsSources.length > 0) {
        res.json(_.uniqBy(_.map(newsSources.sources, 'category')));
    }
    else {
        fetch(newsSourcesUrl)
            .then((res) => res.json())
            .then((json) => {
                res.json(_.uniqBy(_.map(json.sources, 'category')));
            });
    }
};

module.exports = {getNewsSources, getNewsCategories};
