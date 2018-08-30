var express = require('express')
    request = require('request-promise-native')
    bodyParser = require('body-parser')
    async = require('async');

var app = express()
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

accountRouter = express.Router();

accountRouter.route('/account/:id').
    get(function(req,res) {

    var banking_url = {url:'http://localhost:8080/account/' + req.params.id};
    var investments_url = {url:'http://localhost:8080/account/' + req.params.id};
    var lines_of_credit_url = {url:'http://localhost:8080/account/' + req.params.id};
    var accounts = new Object();

    async.parallel([
        function(next) {
            request.get(banking_url, function(error, response, body) {
                accounts.checking = body;
                next();
            });
        },
        function(next) {
            request.get(investments_url, function(error, response, body) {
                accounts.investments = body;
                next();
            });
        },
        function(next) {
            request.get(lines_of_credit_url, function(error, response, body) {
                accounts.lines_of_credit = body
                next();
            });
        }], function(err) {

        res.json(accounts);
    });

});

app.use('/api', accountRouter);

app.listen(port, function () {
    console.log('Running on port ' + port);
});

module.exports = app;