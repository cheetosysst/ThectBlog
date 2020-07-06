var model = require("../model/model")

exports.index = function (req, res) {
	res.render("./index.ejs", model.index_data)
}