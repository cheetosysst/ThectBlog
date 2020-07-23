// Library
var express = require("express")
var app = express()
var view = require("../views/view.js")
app.set('view engine', 'ejs')
require('dotenv').config() // Get configs

// ======================================

function tagList(req, res) {
	res.write("tag placeholder")
	res.end()
}


function tagView(req, res, tag) {
	res.write("tag placeholder with tag " + tag)
	res.end()
}

// ======================================

exports.controller = (req, res, tag) => {
	if (global.DEBUG) console.log("[DEBUG] ./controller/post.controller.js post route")
	if (tag === null) {
		tagList(req, res)
	} else {
		tagView(req, res, tag)
	}
}