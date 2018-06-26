const db = require('../config.js');

const mongoose = require('mongoose');

const fixtureSchema = mongoose.Schema({
  homeTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  awayTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  round: { type: String, enum: ['Group', 'Knock-Out'] },
  complete: { type: Boolean, required: true },
  result: { type: String, required: true },
  et: { type: Boolean },
});

const Fixture = db.model('Fixture', fixtureSchema);

module.exports = Fixture;
