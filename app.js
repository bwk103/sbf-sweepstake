/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const db = require('./db/config.js');
const express = require('express');
const Player = require('./db/models/player');
const Team = require('./db/models/team');
const Fixture = require('./db/models/fixture');
const bodyParser = require('body-parser');
const Routes = require('./routes/index');
const teamRoutes = require('./routes/team');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/teams', Routes.team);
app.use('/players', Routes.player);
app.use('/fixtures', Routes.fixture);

module.exports = app;
