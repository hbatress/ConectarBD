require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const { databaseSer } = require('./servicesBD/databaseSer');


const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
require('./router')(app,databaseSer());



app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
