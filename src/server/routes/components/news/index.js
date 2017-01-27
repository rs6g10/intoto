const router = require('express').Router();
const newsApi = require('./news-api');

router.get('/news/sources', (req, res) => newsApi.getNewsSources(res));
router.get('/news/category', (req, res) => newsApi.getNewsByCategory(res));

module.exports = router;