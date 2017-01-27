const fetch = require('node-fetch');

const getJson = (url, headers) => {
    return fetch(url, {method: 'GET', headers: headers});
}

const parseJson = (res) => {
    return res.json();
}

const checkHttpStatus = (res) => {
    if (res.status >= 200 && res.status < 300) {
        return res;
    }
    else {
        const error = new Error(res.statusText);
        error.response = res;
        throw error;
    }
}

const getHttpResponse = (res, url) => {
    getJson(url).then(checkHttpStatus).then(parseJson).then(response => {
        if (response) {
            res.json(response);
        }
        else {
            res.status(404);
        }
    }).catch(error => {
        if (error.response) {
            res.status(error.response.status).json(error.res.statusText);
        }
        else {
            res.status(404).json(error);
        }
    })
};

module.exports = {getHttpResponse};