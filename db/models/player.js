const db = require('../config.js');
const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: { type: String, required: true },
  points: { type: Number, required: true },
  choices: { type: Array, required: true },
});

const Player = db.model('Player', playerSchema);

module.exports = Player;
