// File       : ./views/view.js
// Description: Render requested pages

// ======================================

// Library
var model = require("../model/model")
require('dotenv').config() // Get configs

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