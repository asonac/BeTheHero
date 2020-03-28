const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
//utilizar a biblioteca supertest para testar as api's

describe('ONG',  () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    //outros exemplos
    // afterEach || afertAll

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG',async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('authorization', 'test') //example for header information
            .send({
                name: "APAD",
                email: "contato@test.com",
                whastapp: "4700000000",
                city: "Rio do Sul",
                uf: "SC"
            })

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
})