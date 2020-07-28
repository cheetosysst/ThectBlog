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
	for (let i = 0; i < files.length; i++) {
		var filename = path.basename(files[i])
		json[filename.split(".")[0]] = await fsPromise.readFile(files[i], "utf8")
	}

	Object.values(json)
	return json
}
// Promise.all(list.map(item => item.data.then(data => ({...item, data}))))