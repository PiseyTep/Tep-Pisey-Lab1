const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');
describe('GET /', () => {
it('should return Hello, CI/CD!', async () => {
// it('should return Hello, GitHub Actions!', async () => { --- IGNORE ---
    const res = await request(app).get('/');
expect(res.status).to.equal(200);
expect(res.text).to.equal('Hello, CI/CD!');
// expect(res.text).to.equal('Hello, GitHub Actions!'); --- IGNORE ---
});
});