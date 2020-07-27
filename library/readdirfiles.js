

// var fs = require('fs')
var path = require("path")
var fs = require("fs")
var fsPromise = require("fs/promises")

exports.readDirs = async (dir, allFiles = []) => {
	const files = (await fsPromise.readdir(dir)).map(f => path.join(dir, f))
	allFiles.push(...files)
	await Promise.all(files.map(async f => (
		(await fsPromise.stat(f)).isDirectory() && rreaddir(f, allFiles)
	)))
	return allFiles
}

exports.readFiles = async (dir) => {
	const files = await this.readDirs(dir)
	var json = {}
	console.log(files)
	files.forEach(async (file) => {
		var filename = file.basename
		fsPromise.readFile(file)
		console.log(json)
	})
}
// Promise.all(list.map(item => item.data.then(data => ({...item, data}))))