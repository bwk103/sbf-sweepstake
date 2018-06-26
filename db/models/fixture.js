const db = require('../config.js');
const mongoose = require('mongoose');

const fixtureSchema = mongoose.Schema({
  teams: { type: Array },
  round: { type: String },
  complete: { type: Boolean, required: true },
  result: { type: String, required: true },
  et: { type: Boolean },
});

const Fixture = db.model('Fixture', fixtureSchema);

module.exports = Fixture;
