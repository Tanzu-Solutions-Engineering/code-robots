var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    agent = request.agent(app);

describe('Get Acccount Integration Test', function(){
    it('Should just work', function(done){
        agent.get('/api/account/123')
            .expect(200)
            .end(function(err, results){
                var checking = JSON.parse(results.body.checking);
                var investments = JSON.parse(results.body.investments);
                var lines_of_credit = JSON.parse(results.body.lines_of_credit);
                checking.balance.should.equal(100);
                investments.balance.should.equal(100);
                lines_of_credit.balance.should.equal(100);

                done();
            })
    })


})