// File       : ./views/view.js
// Description: Render requested pages

// ======================================

// Library
var model = require("../model/model")

// ======================================

// Exports

// Funtion    : index(req, res)
// Return type: Function
// Description: Rendered Homepage
exports.index = function (req, res) {
	res.render("./index.ejs", model.index_data)
}

// Funtion    : postView(req, res)
// Return type: Function
// Description: Rendered Post content page
exports.postView = function (req, res, SerialNumber) {
	res.render("./postView.ejs", model.post_view_data(SerialNumber))
}