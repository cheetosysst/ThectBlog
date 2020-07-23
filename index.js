// File       : ./index.js
// Description: Entry point of this blog server. Only for initial routing and connection message

// ======================================

// Library
var express    = require('express');
var Controller = require('./controller/controller.js')

// Variable
var app        = express();
require('dotenv').config() // Get configs
app.set('view engine', 'ejs')
global.DEBUG = false
global.CONNECTION_LOG = false

// ======================================

// Routing
// Output request method in console
// TODO: Make it optional in dotenv
app.use(function(req, res, next) {
	if (process.env.CONNECTION_LOG == "true") console.log(req.method, req.url)
	next()
})

// Static file requests (css, js, image, etc)
app.use('/static', express.static('public'));

// All non-static connection
app.use(function(req, res, next) {
	Controller(req, res, next)
})

// ======================================

// Server start and listen to port
// TODO: Read port from dotenv
var server = app.listen(process.env.BASE_PORT || 8081, function () {
	var name    = require('./package.json').name
	var version = require('./package.json').version
	var host    = server.address().address
	var port    = server.address().port

	if (process.env.DEBUG.toLowerCase() == "true")          global.DEBUG          = true
	if (process.env.CONNECTION_LOG.toLowerCase() == "true") global.CONNECTION_LOG = true

	if (global.DEBUG)          console.log("[SYSTEM] Debug mode ENABLE")
	if (global.CONNECTION_LOG) console.log("[SYSTEM] Connection log ENABLE")
	console.log("[SYSTEM] %s %s Running on http://%s:%s", name, version, host, port)
})