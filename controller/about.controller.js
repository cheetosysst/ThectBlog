// Library
var express = require("express")
var app = express()
var view = require("../views/view.js")
app.set('view engine', 'ejs')
require('dotenv').config() // Get configs

// ======================================


// ======================================

exports.controller = (req, res, search) => {
	if (global.DEBUG) console.log("[DEBUG] ./controller/about.controller.js about route")
	res.write("about placeholder")
	res.end()
}