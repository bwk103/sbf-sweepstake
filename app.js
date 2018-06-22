/* eslint-disable no-unused-vars */

const db = require('./db/config.js');
const express = require('express');
const Player = require('./db/models/player');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/players', (req, res) => {
  res.send('This is going to display all of the players');
});

app.get('/players/new', (req, res) => {
  res.send('This is going to be the new players page');
});

module.exports = app;
