const Team = require('../../db/models/team');
const db = require('../../db/config');

let team;

beforeEach(() => {
  team = new Team({
    name: 'England', flag: 'Something', fixtures: [], points: 6, goals: 8,
  });
});

afterAll(() => {
  db.disconnect();
});

describe('Team', () => {
  describe('validates', () => {
    test('name cannot be null', async () => {
      team.name = null;
      await expect(team.validate()).rejects.not.toBe(null);
    });
    test('flag cannot be null', async () => {
      team.flag = null;
      await expect(team.validate()).rejects.not.toBe(null);
    });
    test('points cannot be null', async () => {
      team.points = null;
      await expect(team.validate()).rejects.not.toBe(null);
    });
    test('fixtures cannot be null', async () => {
      team.fixtures = null;
      await expect(team.validate()).rejects.not.toBe(null);
    });
    test('goals cannot be null', async () => {
      team.goals = null;
      await expect(team.validate()).rejects.not.toBe(null);
    });
  });
});
