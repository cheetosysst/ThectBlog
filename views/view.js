var model = require("../model/model")


exports.index = function (req, res) {
	res.render("./index.ejs", {
		title: model.title,
		description: model.description,
		email: model.email
	})
}