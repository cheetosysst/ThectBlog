// Library
var express = require("express")
var app = express()
var view = require("../views/view.js")
app.set('view engine', 'ejs')
require('dotenv').config() // Get configs

// ======================================


// ======================================

exports.controller = (req, res) => {
	if (global.DEBUG) console.log("[DEBUG] ./controller/faq.controller.js faq route")
	res.write("FAQ placeholder")
	res.end()
}