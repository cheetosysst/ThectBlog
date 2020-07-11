// File       : ./controller/controller.js
// Description: Control most of the connection routing

// ======================================

// Library
var express = require("express")
var app     = express()
var view    = require("../views/view.js")
app.set('view engine', 'ejs')
require('dotenv').config() // Get configs

// ======================================

// Routes
// Homepage: Display owner description and latest posts
app.get('/', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js / route")
	view.index(req, res)
})

// Redirect: Redirect user to other site
// TODO:     Use pre-defined list of site and url, instead of writing new "router.get()" for every single site
app.get('/github', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js github route") // This one doesn't work, but it's working properly, so let's ignore that.
	res.writeHead(301, {
		Location: global.GITHUB
	});
	res.end()
})

// Post: List all posts, sort by time
app.get('/post', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js post route")
	res.write("post placeholder") // TODO: Create page
	res.end()
})

// Post Content: Display post content
app.get('/post/:SerialNumber', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js post:SerialNumber route")
	view.postView(req, res, req.params.SerialNumber)
})

// Tags: list all posts with a certain tag
app.get('/tags', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js tag route")
	res.write("tags placeholder") // TODO: Create page
	res.end()
})
app.get('/tags/:tag', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js tags:tag route")
	res.write("tags placeholder") // TODO: Create page
	res.end()
})

// Search: Search posts
app.get('/search', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js search route")
	res.write("search placeholder") // TODO: Create page
	res.end()
})
app.get('/search:search', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js search:search route")
	res.write("search placeholder") // TODO: Create page
	res.end()
})

// About: Display owner's contact info and description
app.get('/about', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js about route")
	res.write("about placeholder") // TODO: Create page
	res.end()
})

// FAQ: FAQ page
app.get('/FAQ', function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./controller/controller.js FAQ route")
	res.write("FAQ placeholder") // TODO: Create page
	res.end()
})

// ======================================

// Export
module.exports = app