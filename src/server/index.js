const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const port = process.env.PORT || 3000;
const filePath = path.join(`${__dirname}/../server/views/layout.html`);

app.get('/', (req,res) => res.sendFile(filePath));
app.use('/api', routes);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});