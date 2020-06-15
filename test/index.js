const expect = require('chai').expect;
const request = require("supertest");

const app = require("../bin/www");


/**
 * @description {post} /getirApi For Testing
 */

describe('POST /getirApp',() => {

    it('Get Records Success', (done) => {
        request(app).post('/getirApp')
            .send({
                "minCount": 1000,
                "maxCount": 10000,
                "startDate": "2016-02-02",
                "endDate": "2018-02-02"
            }).then((res) => {
             const body = res.body;
             expect(body.code).to.eq(0);
             done();
        }).catch((err) => done(err))
    });

    it('Get Records Failed (Missing Parameter)', (done) => {
        request(app).post('/getirApp')
            .send({
                "maxCount": 10000,
                "startDate": "2016-02-02",
                "endDate": "2018-02-02"
            }).then((res) => {
            const body = res.body;
            expect(body.code).to.eq(1);
            done();
        }).catch((err) => done(err))
    })

    it('Get Records Failed (Parameter Invalid Type)', (done) => {
        request(app).post('/getirApp')
            .send({
                "minCount": "getirApp",
                "maxCount": 10000,
                "startDate": "2016-02-02",
                "endDate": "2018-02-02"
            }).then((res) => {
            const body = res.body;
            expect(body.code).to.eq(1);
            done();
        }).catch((err) => done(err))
    })
})