const request = require('supertest');
const app = require('../src/index');

describe('Test the root path', () => {
  test('It should respond with a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Welcome to the Express API!');
  });
  
});
