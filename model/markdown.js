const markdown = require('markdown-it')()
const fs = require('fs')
const md = require('markdown-it')()
const path = require("path")
const util = require('util');
const { resolve } = require('path');
const { rejects } = require('assert');

const readFile = util.promisify(fs.readFile);

function getFile(path) {
	return readFile(path);
}

exports.getPostContent = function (SerialNumber) {
	return new Promise((resolve, reject)=> {
		var pathMD = path.join("./model/posts/", SerialNumber+".md")
		fs.readFile(pathMD, 'utf-8', (err, data) => {
			if (err) {
				reject(console.log("Reject fs.readFile()", err))
			} else {
				resolve(console.log("data in fs.readFile()", data))
			}
		})
	})
}
// var rawMD  = await getFile(pathMD)

// return rawMD