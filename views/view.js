// File       : ./views/view.js
// Description: Render requested pages

// ======================================

// Library
var model = require("../model/model")
var path = require("path")
var ejs = require("ejs")
var fs = require("fs")
var readComponents = require("../library/readdirfiles")
require('dotenv').config() // Get configs

// ======================================

function renderLayout(req, res, page) {
	fs.readFile(path.join(__dirname, page + ".ejs"), "utf8", async (err,data) => {
		var components = await readComponents.readFiles(path.join(__dirname, "components"))
		var html = ejs.render(data, components)
		renderLayout(req, res, html)
	})
}

function renderContent(req, res, html) {
	res.render(html, model.index_data)
}

// ======================================

// Exports

// Funtion    : index(req, res)
// Return type: Function
// Description: Rendered Homepage
exports.index = function (req, res) {
	if (global.DEBUG) console.log("[DEBUG] ./views/view.js exports.index")
	res.render("./index.ejs", model.index_data)
}

// Funtion    : postView(req, res)
// Return type: Function
// Description: Rendered Post content page
exports.postView = async function (req, res, SerialNumber) {
	if (global.DEBUG) console.log("[DEBUG] ./views/view.js exports.postView")
	var json = await model.post_view_data(SerialNumber)
	return res.render("./postView.ejs", json)
}

exports.render = async (req, res, page) => {
	renderLayout(req, res, page)
}