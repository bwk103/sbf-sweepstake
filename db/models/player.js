const db = require('../config.js');
const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: { type: String, required: true },
  points: { type: Number, required: true },
  choices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
});

const Player = db.model('Player', playerSchema);

module.exports = Player;
