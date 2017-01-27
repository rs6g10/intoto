const url = require('url');
const routes = require('express').Router();
const fetch = require('node-fetch');
const _ = require('lodash');
const constants = require('../../../constants');
const urlConstants = require('./news.constants');
const getHttpResponse = require('../../../utils/http-utils').getHttpResponse;


const newsSourcesUrl = url.format({
    protocol: urlConstants.protocol,
    host: urlConstants.host,
    pathname: urlConstants.sourcePathname
});
const newsApiArticleSourceUrl = url.format({
    protocol: urlConstants.protocol,
    host: urlConstants.host,
    pathname: urlConstants.articlePathname
});

let newsSources = {};
const getNewsSources = (res) => {
    /*if (newsSources.length > 0) {
     res.json(newsSources);
     }*/

    getHttpResponse(res, newsSourcesUrl);
};

const getNewsCategories = (res) => {
    if (newsSources.length > 0) {
        res.json(_.uniqBy(_.map(newsSources.sources, constants.category)));
    }
    else {
        getHttpResponse({}, res, newsSourcesUrl)
            .then((json) => {
                res.json((json.sources.map((source) => {
                    return {id: source.id, category: source.category}
                })));
            });
        /*fetch(newsSourcesUrl)
         .then((res) => res.json())
         .then((json) => {
         res.json((json.sources.map((source) => {
         return {id: source.id, category: source.category}
         })));
         });*/
    }
};

const getNewsByCategory = (res, category) => {
    fetch(newsSourcesUrl)
        .then((res) => res.json())
        .then((json) => {
            res.json(_.filter(json.sources, (news) => {
                return news.category.toLowerCase() === category.toLowerCase()
            }))
        })
};

const getNewsBySourceAndCategory = (res, params) => {
    const url = `${newsApiArticleSourceUrl}?source=${params[constants.source]}&category=${params[constants.category]}&apiKey=${constants.newsApiKey}`;

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            console.log('response:', json);
            res.json(_.first(json.articles));
        })
};

module.exports = {
    getNewsSources,
    getNewsCategories,
    getNewsByCategory,
    getNewsBySourceAndCategory
};
