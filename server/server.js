const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const port = 4000;

const app = express();

app.listen(port, function() {
  console.log(`4Group Overview Module listening on port ${port}`);
});

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', express.static(__dirname + '/../public/dist'));
app.use('/restaurant/:rid', express.static(__dirname + '/../public/dist'));

app.get('/api/restaurant/:rid', function (req, res) {
  return db.search(req.params.rid)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(400));
});

app.post('/api/restaurant/:rid', function (req, res) {
  return db.search(req.params.rid)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(400));
});

app.patch('/api/restaurant/:rid', function (req, res) {
  return db.search(req.params.rid)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(400));
});

app.delete('/api/restaurant/:rid', function (req, res) {
  return db.search(req.params.rid)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(400));
});
