const express = require('express');
const bodyParser = require('body-parser');
//const db = require('../database/index');
const port = 3000;

const app = express();

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log('GOT POST REQUEST');
});

app.get('/repos', function (req, res) {
  console.log('Get Request!')
});