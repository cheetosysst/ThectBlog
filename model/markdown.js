// File       : ./model/markdown.js
// Description: Read and return markdown content

// ======================================

// Library
const fs   = require('fs')
const path = require("path")
require('dotenv').config() // Get configs

// ======================================

// Exports 

// Function   : getPostContent(SerialNumber):
// Return type: Promise()
// Description: Return markdown content in a promise object.
exports.getPostContent = function (SerialNumber) {
	if (global.DEBUG) console.log("[DEBUG] ./model/markdwon.js getPostContent()")
	return new Promise((resolve, reject)=> {
		var pathMD = path.join("./model/posts/", SerialNumber+".md")
		fs.readFile(pathMD, 'utf-8', (err, data) => {
			if (err) {
				reject(console.log("Reject fs.readFile()", err))
			} else {
				resolve(data)
			}
		})
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