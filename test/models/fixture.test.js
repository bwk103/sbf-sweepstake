const Fixture = require('../../db/models/fixture');
const db = require('../../db/config');

let fixture;

beforeEach(() => {
  fixture = new Fixture({
    teams: [],
    round: 'Group',
    complete: true,
    result: null,
    et: null,
  });
});

afterAll(() => {
  db.disconnect();
});

describe('Fixture', () => {
  describe('validates', () => {
    test('round cannot be null', async () => {
      fixture.round = null;
      await expect(fixture.validate()).rejects.not.toBe(null);
    });
    test('complete cannot be null', async () => {
      fixture.complete = null;
      await expect(fixture.validate()).rejects.not.toBe(null);
    });
  });
});
