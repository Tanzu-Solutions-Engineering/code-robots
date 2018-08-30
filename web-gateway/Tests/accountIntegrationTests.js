var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    agent = request.agent(app);

describe('Get Acccount Integration Test', function(){
    it('Should just work', function(done){
        agent.get('/api/account/123')
            .expect(200)
            .end(function(err, results){

                results.body.checking.balance.should.equal(100);
                results.body.investments.balance.should.equal(1000);
                results.body.lines_of_credit.balance.should.equal(-100000);

                done();
            })
    })


})