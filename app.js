var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/browse', indexController.browse);
app.get('/collection', indexController.collection);
app.get('/stats', indexController.stats);
app.get('/wtfmachine', indexController.wtfmachine);
app.get('/newstuff', indexController.newstuff);

var server = app.listen(7061, function() {
	console.log('Express server listening on port ' + server.address().port);
});
