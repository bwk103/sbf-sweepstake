/* eslint-disable no-console */

const router = require('express').Router();

const Team = require('../db/models/team');

const showTeams = async (req, res) => {
  try {
    const allTeams = await Team.find({});
    res.status(200).send(allTeams);
  } catch (err) {
    console.log(err);
    res.status(404).send('There has been an error');
  }
};

const createTeam = async (req, res) => {
  const newTeam = new Team({
    name: req.body.name,
    flag: req.body.flag,
    fixtures: [],
    points: req.body.points,
    goals: req.body.goals,
  });
  try {
    await newTeam.save();
    res.status(201).send('Team saved successfully');
  } catch (err) {
    console.log(err);
    res.status(409).send('There has been a problem adding the new team');
  }
};

const showForm = async (req, res) => {
  res.send('This will be the new team form');
};

const deleteTeam = async (req, res) => {
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
};

router.route('/')
  .get(showTeams)
  .post(createTeam);

router.route('/new')
  .get(showForm);

router.route('/:id')
  .delete(deleteTeam);

module.exports = router;
