const fetch = require('node-fetch');
const _ = require('lodash');
const newsSourcesUrl = 'https://newsapi.org/v1/sources';
const newsApiArticleSourceUrl ='https://newsapi.org/v1/articles?';
const newsApiapiKey ='f9cd95f7d2714738a4d2baed0c7af52f';

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
                res.json((json.sources.map((source) => {
                    var obj = {};
                    obj['id'] = source.id;
                    obj['category'] = source.category;
                    return obj;
                })));
            });
    }
};

const getNewsByCategory = (res, category) => {
    fetch(newsSourcesUrl)
        .then((res) => res.json())
        .then((json) => {
            res.json(_.filter(json.sources, (news) => { return news.category === category}))
        })
};

const getNewsBySourceAndCategory = (res, params) => {
    const url= `${newsApiArticleSourceUrl}&source=${params['source']}&category=${params['category']}&apiKey=${newsApiapiKey}`;
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            console.log('response:',json);
            res.json(_.first(json.articles));
        })
};

module.exports = {
    getNewsSources,
    getNewsCategories,
    getNewsByCategory,
    getNewsBySourceAndCategory
};
