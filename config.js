const env = process.env.NODE_ENV || 'dev';

const dev = {
  app: {
    port: 3000,
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'sweepstake',
  },
};

const test = {
  app: {
    port: 3000,
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'sweepstake-test',
  },
};

const config = { dev, test };

module.exports = config[env];

