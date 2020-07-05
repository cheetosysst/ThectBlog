var express    = require('express');
var app        = express();
var router     = express.Router();

var Controller = require('./controller/controller.js')

app.use(function(req, res, next) {
	console.log(req.method, req.url)
	next()
})

app.get('/', Controller)

app.use('/static', express.static('public'));

var server = app.listen(8081, function () {

	// Data
	var name    = require('./package.json').name
	var version = require('./package.json').version
	var host    = server.address().address
	var port    = server.address().port

	console.log("%s %s Running on http://%s:%s", name, version, host, port);
})