var express = require('express')
    request = require('request-promise-native')
    bodyParser = require('body-parser')

var app = express()
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

accountRouter = express.Router();

accountRouter.route('/account/:id').
    get(function(req,res){
        request.get({ url: "http://localhost:8080/account/" + req.params.id }, function(error, response, body) {
            if (!error) {
                res.status(response.statusCode);
                res.json(body);
            }
            else {
                res.status(response.statusCode);
            }
        });
});

app.use('/api', accountRouter);

app.listen(port, function () {
    console.log('Running on port ' + port);
});

module.exports = app;