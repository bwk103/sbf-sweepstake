/* eslint-disable no-console */

const mongoose = require('mongoose');
const config = require('../config');

const { db: { host, port, name } } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;

mongoose.connect(connectionString).then(
  () => { console.log(`Connected to ${name} on port ${port}`); },
  (err) => { console.log(err); },
);

module.exports = mongoose;
