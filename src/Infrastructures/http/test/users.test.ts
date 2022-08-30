import request from 'supertest';
import app from '../createServer';
describe('HTTP GET /users', () => {
  it('should response 200', async () => {
    const response =  await request(app).get('/api/users');
    expect(response.status).toEqual(200);
    expect(response.body.status).toBeDefined();
    expect(response.body.message).toBeDefined();
    expect(response.body.data).toBeDefined();
  });
});