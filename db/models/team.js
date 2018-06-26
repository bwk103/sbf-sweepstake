const db = require('../config.js');
const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: { type: String, required: true },
  flag: { type: String, required: true },
  fixtures: { type: Array, required: true },
  points: { type: Number, required: true },
  goals: { type: Number, required: true },
});

teamSchema.methods.getPoints = function () {
  let totalPoints;
  this.fixtures.forEach((fixture) => {
    if (fixture.et === true) {
      totalPoints += 1;
    }
    if (fixture.result === this.name) {
      totalPoints += 2;
    } else if (fixture.result === 'Draw') {
      totalPoints += 1;
    }
  });
  return totalPoints || 0;
};

teamSchema.methods.doSomething = function () {
  console.log('It works!');
};

const Team = db.model('Team', teamSchema);

module.exports = Team;
