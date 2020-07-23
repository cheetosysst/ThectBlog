// File       : ./controller/controller.js
// Description: Control most of the connection routing

// ======================================

// Library
var express = require("express")
var app     = express()
var view    = require("../views/view.js")

var indexController = require("./index.controller")
var githubController = require("./github.controller")
var postController = require("./post.controller")
var tagController = require("./tag.controller")
var searchController = require("./search.controller")
var aboutController = require("./about.controller")
var faqController = require("./faq.controller")

app.set('view engine', 'ejs')
require('dotenv').config() // Get configs

// ======================================

// Routes
// Redirect: Redirect user to other site
app.use('/github', function (req, res) { githubController.controller(req, res)})

// Post: List all posts, sort by time
app.get('/post', function (req, res) { postController.controller(req, res, null)})
app.get('/post/:SerialNumber', function (req, res) { postController.controller(req, res, req.params.SerialNumber)})

// Tags: list all posts with a certain tag
app.get('/tag', function (req, res) { tagController.controller(req, res, null)})
app.get('/tag/:tag', function (req, res) { tagController.controller(req, res, req.params.tag)})

// Search: Search posts
app.get('/search', function (req, res) { searchController.controller(req, res, null)})
app.get('/search/:search', function (req, res) { searchController.controller(req, res, req.params.search)})

// About: Display owner's contact info and description
app.get('/about', function (req, res) { aboutController.controller(req, res)})

// FAQ: FAQ page
app.get('/FAQ', function (req, res) { faqController.controller(req, res)})

// Homepage: Display owner description and latest posts
app.use('/', function (req, res) { indexController.controller(req, res)})

// ======================================

// Export
module.exports = app