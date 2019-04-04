const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
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

app.get('/restaurant', function (req, res) {
  console.log(db)
  console.log('Get Request!', req.query.restaurant)
  return db.search(req.query.restaurant)
  .then(result => res.send(result));
});