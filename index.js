// File       : ./index.js
// Description: Entry point of this blog server. Only for initial routing and connection message

// ======================================

// Library
var express    = require('express');
var Controller = require('./controller/controller.js')

// Variable
var app        = express();

// ======================================

// Routing
// Output request method in console
// TODO: Make it optional in dotenv
app.use(function(req, res, next) {
	console.log(req.method, req.url)
	next()
})

// All non-static connection
app.use(function(req, res, next) {
	Controller(req, res, next)
})

// Static file requests (css, js, image, etc)
app.use('/static', express.static('public'));

// ======================================

// Server start and listen to port
// TODO: Read port from dotenv
var server = app.listen(8081, function () {
	var name    = require('./package.json').name
	var version = require('./package.json').version
	var host    = server.address().address
	var port    = server.address().port
	console.log("%s %s Running on http://%s:%s", name, version, host, port);
})