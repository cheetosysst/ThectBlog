// Library
var express = require("express")
var app = express()
var view = require("../views/view.js")
app.set('view engine', 'ejs')
require('dotenv').config() // Get configs

// ======================================


// ======================================

exports.controller = (req, res) => {
	if (global.DEBUG) console.log("[DEBUG] ./controller/error.controller.js error route")
	res.status(404)
	if (req.accepts("html")) {
		res.send("404 Not Found")
	} else if (req.accepts("json")) {
		res.send({ error: 'Not found' });
	} else {
		res.type("txt").send("Not found")
	}
}