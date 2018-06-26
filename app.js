/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const db = require('./db/config.js');
const express = require('express');
const Player = require('./db/models/player');
const Team = require('./db/models/team');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/players', async (req, res) => {
  try {
    const allPlayers = await Player.find({});
    res.status(200).send(allPlayers);
  } catch (err) {
    console.log(err);
  }
});

app.get('/players/new', (req, res) => {
  res.send('This is going to be the new players page');
});

app.post('/players', async (req, res) => {
  const newPlayer = new Player({
    name: req.body.name,
    points: req.body.points,
  });
  try {
    const savedPlayer = await newPlayer.save();
    res.status(201).send({ response: 'New player successfully created' });
  } catch (err) {
    console.log(err);
    res.status(409).send({ response: 'There has been a problem creating the player' });
  }
});

app.delete('/player/:id', async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndRemove(req.params.id);
    if (!deletedPlayer) {
      return res.status(404).send({ response: 'There was a problem deleting that player' });
    }
    return res.status(200).send({ response: 'Player deleted successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ response: 'There was an error trying to delete the player' });
  }
});

app.get('/teams', async (req, res) => {
  try {
    const allTeams = await Team.find({});
    res.status(200).send(allTeams);
  } catch (err) {
    console.log(err);
    res.status(404).send('There has been an error');
  }
});

app.get('/teams/new', async (req, res) => {
  res.send('This is going to be where we display the add team form');
});

app.post('/teams', async (req, res) => {
  const newTeam = new Team({
    name: req.body.name,
    flag: req.body.flag,
    fixtures: [],
    points: req.body.points,
    goals: req.body.goals,
  });
  try {
    const savedTeam = await newTeam.save();
    res.status(201).send('Team saved successfully');
  } catch (err) {
    console.log(err);
    res.status(409).send('There has been a problem adding the new team');
  }
});

app.delete('/team/:id', async (req, res) => {
  try {
    const deletedTeam = await Team.findOneAndRemove(req.params.id);
    if (!deletedTeam) {
      return res.status(404).send('There has been a problem deleting the team');
    }
    return res.status(200).send('Team deleted successfully');
  } catch (err) {
    console.log(err);
    return res.send(404).send('There was a problem deleting the team');
  }
});

module.exports = app;
