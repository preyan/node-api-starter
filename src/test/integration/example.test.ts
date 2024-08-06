import request from 'supertest';
import app from '../../../src/index.ts';

describe('Example Integration Test', () => {
  it('should return 200', (done) => {
    request(app).get('/api/example').expect(200, done);
  });
});
