const request = require('supertest');
const app = require('./index');

describe('Проверка наличия разметки', () => {
    it('should return an text markup', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.text).toContain('<p>💜</p>');
        // done();
    });
});

