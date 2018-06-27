const Player = require('../../db/models/player');
const db = require('../../db/config');

let player;

beforeEach(() => {
  player = new Player({ name: 'John Smith', points: 10, choices: [] });
});

afterAll(() => {
  db.disconnect();
});

describe('Player', () => {
  describe('validates', () => {
    test('name cannot be null', async () => {
      player.name = null;
      await expect(player.validate()).rejects.not.toBe(null);
    });
    test('points cannot be null', async () => {
      player.points = null;
      await expect(player.validate()).rejects.not.toBe(null);
    });
  });
});

