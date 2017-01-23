const express = require('express');
const app = express();

app.get('/', (req, res) => { res.send('Hello World')});
app.get('/gaurav', (req, res) => { res.send('Hello Gaurav')});
app.get('/rahul', (req, res) => { res.send('Hello Rahul')});

app.listen(3000, () => {
    console.log('listening on port 3000');
});