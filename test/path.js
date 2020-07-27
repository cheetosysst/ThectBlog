var path = require("path")
var components = require("../views/components")
var readdirfiles = require("../library/readdirfiles")




async function test() {
	let data = await readdirfiles.readDirs(__dirname)
	console.log(data)
}

test()