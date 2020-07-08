const markdown = require('markdown-it')()
const fs = require('fs')
const md = require('markdown-it')()
const path = require("path")
const util = require('util');

const readFile = util.promisify(fs.readFile);

function getFile(path) {
	return readFile(path);
}

exports.getPostContent = async function (SerialNumber) {
	var pathMD = path.join("./model/posts/", SerialNumber+".md")
	var rawMD  = await getFile(pathMD)

	return rawMD
}