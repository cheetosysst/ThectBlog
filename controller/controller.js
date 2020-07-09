// File       : ./controller/controller.js
// Description: Control most of the connection routing

// ======================================

// Library
const router = require('express').Router()
const view = require("../views/view.js")

// ======================================

// Routes
// Homepage: Display owner description and latest posts
router.get('/', function (req, res) {
	view.index(req, res)
})

// Redirect: Redirect user to other site
// TODO:     Use pre-defined list of site and url, instead of writing new "router.get()" for every single site
router.get('/github', function (req, res) {
	res.writeHead(301, {
		Location: 'https://github.com/cheetosysst/'
	});
	res.end()
})

// Post: List all posts, sort by time
router.get('/post', function (req, res) {
	res.write("post placeholder") // TODO: Create page
	res.end()
})

// Post Content: Display post content
router.get('/post/:SerialNumber', function (req, res) {
	view.postView(req, res, req.params.SerialNumber)
	res.end()
})

// Tags: list all posts with a certain tag
router.get('/tags', function (req, res) {
	res.write("tags placeholder") // TODO: Create page
	res.end()
})
router.get('/tags/:tag', function (req, res) {
	res.write("tags placeholder") // TODO: Create page
	res.end()
})

// Search: Search posts
router.get('/search', function (req, res) {
	res.write("search placeholder") // TODO: Create page
	res.end()
})
router.get('/search:search', function (req, res) {
	res.write("search placeholder") // TODO: Create page
	res.end()
})

// About: Display owner's contact info and description
router.get('/about', function (req, res) {
	res.write("about placeholder") // TODO: Create page
	res.end()
})

// FAQ: FAQ page
router.get('/FAQ', function (req, res) {
	res.write("FAQ placeholder") // TODO: Create page
	res.end()
})

// ======================================

// Export
module.exports = router