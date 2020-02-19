const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var cors = require('cors');
var aylien = require('aylien_textapi');

// set aylien API credentias
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// textapi.semantic({
//   'text': 'John is a very good football player'
// }, function(error, response) {
//   if (error === null) {
//     console.log(response)
//   }
// })

var json = {
  title: 'test json response',
  message: 'this is a message',
  time: 'now'
};

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static('dist'));

console.log(JSON.stringify(mockAPIResponse));

app.get('/', function(req, res) {
  res.sendFile('dist/index.html');
});

app.get('/test', function(req, res) {
  res.json(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
  console.log('Example app listening on port 8081!');
});
