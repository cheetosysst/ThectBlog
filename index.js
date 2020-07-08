var express    = require('express');
var app        = express();
var Controller = require('./controller/controller.js')
var fullUrl    = ""

app.use(function(req, res, next) {
	console.log(req.method, req.url)
	fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	next()
})

// app.get('/', Controller)

app.use(function(req, res, next) {
	Controller(req, res, next)
})

app.use('/static', express.static('public'));

var server = app.listen(8081, function () {

	// Data
	var name    = require('./package.json').name
	var version = require('./package.json').version
	var host    = server.address().address
	var port    = server.address().port

	console.log("%s %s Running on http://%s:%s", name, version, host, port);
})

exports.fullUrl = fullUrl