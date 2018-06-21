const app = require('../app');
const request = require('supertest');
const db = require('../db/config');

afterAll(() => {
  db.disconnect();
});

describe('root path', () => {
  describe('GET request', () => {
    test('returns 200 status code', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });
    test('returns appropriate response', async () => {
      const response = await request(app).get('/');
      expect(response.text).toBe('Hello World!');
    });
  });
});
