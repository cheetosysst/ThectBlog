var model = require("../model/model")

exports.index = function (req, res) {
	res.render("./index.ejs", model.index_data)
}

exports.postView = function (req, res, SerialNumber) {
	res.render("./postView.ejs", model.post_view_data(SerialNumber))
}