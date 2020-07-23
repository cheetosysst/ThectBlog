// File       : ./controller/controller.js
// Description: Control most of the connection routing

// ======================================

// Library
var express = require("express")
var app = express()
var router = express.Router()
var view = require("../views/view.js")

var indexController = require("./index.controller")
var githubController = require("./github.controller")
var postController = require("./post.controller")
var tagController = require("./tag.controller")
var searchController = require("./search.controller")
var aboutController = require("./about.controller")
var faqController = require("./faq.controller")
var errorController = require("./error.controller")

app.set('view engine', 'ejs')
require('dotenv').config() // Get configs

// ======================================

// Routes

// Homepage: Display owner description and latest posts
router.get('/', (req, res) => { indexController.controller(req, res)})

// Post: List all posts, sort by time
router.use('/post/:SerialNumber', (req, res) => { postController.controller(req, res, req.params.SerialNumber)})
router.use('/post', (req, res) => { postController.controller(req, res, null)})

// Redirect: Redirect user to other site
router.use('/github', (req, res) => { githubController.controller(req, res)})

// Tags: list all posts with a certain tag
router.use('/tag/:tag', (req, res) => { tagController.controller(req, res, req.params.tag)})
router.use('/tag', (req, res) => { tagController.controller(req, res, null)})

// Search: Search posts
router.get('/search/:search', (req, res) => { searchController.controller(req, res, req.params.search)})
router.get('/search', (req, res) => { searchController.controller(req, res, null)})

// About: Display owner's contact info and description
router.get('/about', (req, res) => { aboutController.controller(req, res)})

// FAQ: FAQ page
router.get('/FAQ', (req, res) => { faqController.controller(req, res)})
router.get('/security.txt', (req, res) => {
	res.send("placeholder")
})

// 404
router.use((req, res) => { errorController.controller(req, res)})

// ======================================

// Export
module.exports = router