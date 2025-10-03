const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const api = require('./routes');

app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, ()=> console.log(`Server listening on ${port}`));
module.exports = app;
