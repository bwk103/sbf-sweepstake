/* eslint-disable no-unused-vars */

const db = require('./db/config.js');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
