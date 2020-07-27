var fs = require("fs")
var readfiles = require("../library/readdirfiles")
var path = require("path")

exports.getComponents = async () => {
	var data = await readfiles.readFiles(path.join(__dirname, "components"))
	return data
}