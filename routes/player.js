/* eslint-disable no-console */

const express = require('express');

const Router = express.Router();
const Player = require('../db/models/player');

const getPlayers = async (req, res) => {
  try {
    const allPlayers = await Player.find({});
    res.status(200).send(allPlayers);
  } catch (err) {
    console.log(err);
  }
};

const createPlayer = async (req, res) => {
  const newPlayer = new Player({
    name: req.body.name,
    points: req.body.points,
  });
  try {
    await newPlayer.save();
    res.status(201).send({ response: 'New player successfully created' });
  } catch (err) {
    console.log(err);
    res.status(409).send({ response: 'There has been a problem creating the player' });
  }
};

const playerForm = async (req, res) => {
  res.send('This is going to be the new players page');
};

const deletePlayer = async (req, res) => {
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
};

Router.route('/')
  .get(getPlayers)
  .post(createPlayer);

Router.route('/new')
  .get(playerForm);

Router.route('/:id')
  .delete(deletePlayer);

module.exports = Router;
