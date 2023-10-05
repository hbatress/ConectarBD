require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const { databaseSer } = require('./services/databaseSer');


const app = express();
app.use(bodyParser.json());

require('./router')(app,databaseSer());

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});