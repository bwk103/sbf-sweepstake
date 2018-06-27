const app = require('../app');
const request = require('supertest');
const db = require('../db/config');

afterAll(() => {
  db.disconnect();
});

describe('/players', () => {
  describe('GET request', () => {
    test('returns 200 status code', async () => {
      const response = await request(app).get('/players');
      expect(response.statusCode).toBe(200);
    });
  });
});
describe('/teams', () => {
  describe('GET request', () => {
    test('returns 200 status code', async () => {
      const response = await request(app).get('/teams');
      expect(response.statusCode).toBe(200);
    });
  });
});
describe('/fixtures', () => {
  describe('GET request', () => {
    test('returns 200 status code', async () => {
      const response = await request(app).get('/fixtures');
      expect(response.statusCode).toBe(200);
    });
  });
});
