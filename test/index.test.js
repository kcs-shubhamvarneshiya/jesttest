const request = require('supertest');
const app = require('../src/index');


let server;

beforeAll((done) => {
  server = app.listen(8000, () => {
    console.log('Server is running');
    done();
  });
});

afterAll((done) => {
  server.close(done);
});


describe('Test the root path', () => {
  test('It should respond with a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Welcome to the Express API!');
  });

  test('It should respond with a test route', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('test reached successfully!');
  });

  test('negative API test', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(500);
    expect(response.body.message).toBe('server error');
  });

});
