// File       : ./controller/controller.js
// Description: Control most of the connection routing

// ======================================

// Library
var express = require("express")
var app     = express();
app.set('view engine', 'ejs')
var view    = require("../views/view.js")


// ======================================

// Routes
// Homepage: Display owner description and latest posts
app.get('/', function (req, res) {
	view.index(req, res)
})

// Redirect: Redirect user to other site
// TODO:     Use pre-defined list of site and url, instead of writing new "router.get()" for every single site
app.get('/github', function (req, res) {
	res.writeHead(301, {
		Location: 'https://github.com/cheetosysst/'
	});
	res.end()
})

// Post: List all posts, sort by time
app.get('/post', function (req, res) {
	res.write("post placeholder") // TODO: Create page
	res.end()
})

// Post Content: Display post content
app.get('/post/:SerialNumber', function (req, res) {
	view.postView(req, res, req.params.SerialNumber)
	// res.end()
})

// Tags: list all posts with a certain tag
app.get('/tags', function (req, res) {
	res.write("tags placeholder") // TODO: Create page
	res.end()
})
app.get('/tags/:tag', function (req, res) {
	res.write("tags placeholder") // TODO: Create page
	res.end()
})

// Search: Search posts
app.get('/search', function (req, res) {
	res.write("search placeholder") // TODO: Create page
	res.end()
})
app.get('/search:search', function (req, res) {
	res.write("search placeholder") // TODO: Create page
	res.end()
})

// About: Display owner's contact info and description
app.get('/about', function (req, res) {
	res.write("about placeholder") // TODO: Create page
	res.end()
})

// FAQ: FAQ page
app.get('/FAQ', function (req, res) {
	res.write("FAQ placeholder") // TODO: Create page
	res.end()
})

// ======================================

// Export
module.exports = app