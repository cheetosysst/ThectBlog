// Library
var express = require("express")
var app = express()
var view = require("../views/view.js")
app.set('view engine', 'ejs')
require('dotenv').config() // Get configs

// ======================================

function searchList(req, res) {
	res.write("search placeholder")
	res.end()
}


function searchView(req, res, search) {
	res.write("search placeholder with search " + search)
	res.end()
}

// ======================================

exports.controller = (req, res, search) => {
	if (global.DEBUG) console.log("[DEBUG] ./controller/search.controller.js search route")
	if (search === null) {
		searchList(req, res)
	} else {
		searchView(req, res, search)
	}
}