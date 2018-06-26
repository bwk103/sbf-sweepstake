const db = require('../config.js');
const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: { type: String, required: true },
  flag: { type: String, required: true },
  fixtures: { type: Array, required: true },
  points: { type: Number, required: true },
  goals: { type: Number, required: true },
});

const Team = db.model('Team', teamSchema);

module.exports = Team;
