const markdown = require('markdown-it')()
const fs = require('fs')
const md = require('markdown-it')()
const path = require("path")

exports.getPostContent = function (SerialNumber) {
	var pathMarkdown = path.join("./model/posts/", SerialNumber+".md")
	console.log(pathMarkdown)
	rawMarkdown = ""
	fs.readFile(pathMarkdown, function (err, data) {
		if (err) throw err
		rawMarkdown = data
	})
	console.log("rawMarkdown", rawMarkdown)
	parsedMarkdown = md.render(rawMarkdown)

	return parsedMarkdown
}