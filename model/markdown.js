// File       : ./model/markdown.js
// Description: Read and return markdown content

// ======================================

// Library
const fs = require('fs')
const path = require("path")

// ======================================

// Exports 

// Function   : getPostContent(SerialNumber):
// Return type: Promise()
// Description: Return markdown content in a promise object.
exports.getPostContent = function (SerialNumber) {
	return new Promise((resolve, reject)=> {
		var pathMD = path.join("./model/posts/", SerialNumber+".md")
		fs.readFile(pathMD, 'utf-8', (err, data) => {
			if (err) {
				reject(console.log("Reject fs.readFile()", err))
			} else {
				console.log("data in fs.readFile()", data)
				resolve(data)
			}
		})
	})
}