// File       : ./library/markdown.js
// Description: Read and return markdown content

// ======================================

// Library
var md = require('markdown-it')();
require('dotenv').config() // Get configs

// ======================================

// Exports 

// Function   : getPostContent(SerialNumber):
// Return type: Promise()
// Description: Return markdown content in a promise object.
exports.parseMarkdown = (raw) => {
	if (global.DEBUG) console.log("[DEBUG] ./model/markdwon.js parseMarkdown()")
	return new Promise((resolve, reject)=> {
		var data = md.render(raw)
		resolve(data)
	})
}

exports.getTitle = function(file) {
	if (global.DEBUG) console.log("[DEBUG] ./model/markdwon.js getTitle()")
	return file.split("\r\n")[0].split(" ")[1]
}

exports.getTags = function(file) {
	if (global.DEBUG) console.log("[DEBUG] ./model/markdwon.js getTags()")
	temp = file.split("\r\n")[1].split("`")
	for(var i=0; i < temp.length; i++) {
		if (temp[i]===" " || temp[i]==="") temp.splice(i,1)
	}
	return temp
}