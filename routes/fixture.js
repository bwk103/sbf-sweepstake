/* eslint-disable no-console */

const express = require('express');

const Router = express.Router();
const Fixture = require('../db/models/fixture');
const Team = require('../db/models/team');

const getFixtures = async (req, res) => {
  try {
    const allFixtures = await Fixture.find({});
    res.status(200).send(allFixtures);
  } catch (err) {
    console.log(err);
    res.status(404).send('There has been an error');
  }
};

const fixtureForm = async (req, res) => {
  res.send('This is going to be where we display the add fixtures form');
};

const createFixture = async (req, res) => {
  const newFixture = new Fixture({
    homeTeam: req.body.homeTeam,
    awayTeam: req.body.awayTeam,
    round: req.body.round,
    complete: req.body.complete,
    result: req.body.result,
    et: req.body.et,
  });
  try {
    const savedFixture = await newFixture.save();
    const homeTeam = await Team.findById(req.body.homeTeam);
    homeTeam.fixtures.push(savedFixture);
    await homeTeam.save();
    res.status(201).send('Fixture saved successfully');
  } catch (err) {
    console.log(err);
    res.status(409).send('There has been a problem adding the new fixture');
  }
};

const deleteFixture = async (req, res) => {
  try {
    const deletedFixture = await Fixture.findOneAndRemove(req.params.id);
    if (!deletedFixture) {
      return res.status(404).send('There has been a problem deleting the fixture');
    }
    return res.status(200).send('Fixture deleted successfully');
  } catch (err) {
    console.log(err);
    return res.send(404).send('There was a problem deleting the fixture');
  }
};

Router.route('/')
  .get(getFixtures)
  .post(createFixture);

Router.route('/new')
  .get(fixtureForm);

Router.route('/:id')
  .delete(deleteFixture);

module.exports = Router;
