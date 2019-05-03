
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/restaurant/:rid', express.static(path.join(__dirname, 'public')));

const overviewProxy = axios.create({
  baseURL: 'http://ec2-18-222-224-50.us-east-2.compute.amazonaws.com:3000'
})

app.use('/api/restaurant/:rid', (req, res) => {
  overviewProxy.get(`/api/restaurant/${req.params.rid}`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
})

app.listen(port, () => {
  console.log(`proxy server running at: http://localhost:${port}`);
});