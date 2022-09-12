const request = require('supertest');
const app = require('../lib/main');
describe('Post Login', () => {
  it('should login a user', async () => {
    const res = await request(app).post('/login').send({
      email: 'admin@gmail.com',
      password: 'admin',
    });
    expect(res.statusCode).toEqual(200);
  });
});

describe('get Users', () => {
  it('should return all the user', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
  });
});
