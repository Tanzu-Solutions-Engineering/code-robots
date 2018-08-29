var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    agent = request.agent(app);

describe('Get Acccount Integration Test', function(){
    it('Should just work', function(done){
        agent.get('/api/account/123')
            .expect(200)
            .end(function(err, results){
                var acct = JSON.parse(results.body);
                acct.balance.should.equal(100);
                done();
            })
    })


})