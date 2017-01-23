const express = require('express');
const app = express();
const getNewsSources = require('./routes/components/news/news-api').getNewsSources;
const getNewsCategories = require('./routes/components/news/news-api').getNewsCategories;

app.get('/', (req, res) => { res.send('Hello World')});
app.get('/gaurav', (req, res) => { res.send('Hello Gaurav')});
app.get('/rahul', (req, res) => { res.send('Hello Rahul')});
app.get('/news-sources', (req, res) => {
    getNewsSources(res);
});
app.get('/news-categories', (req, res) => {
    getNewsCategories(res);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});