// Library
var express = require("express")
var app = express()
var view = require("../views/view.js")
app.set('view engine', 'ejs')
require('dotenv').config() // Get configs

// ======================================

function postList(req, res) {
	res.write("post placeholder")
	res.end()
}

function postView(req, res, SerialNumber) {
	view.postView(req, res, SerialNumber)
}

// ======================================

exports.controller = (req, res, SerialNumber) => {
	if (global.DEBUG) console.log("[DEBUG] ./controller/post.controller.js post route")
	if (SerialNumber === null) {
		postList(req, res)
	} else {
		postView(req, res, SerialNumber)
	}
}