var path = require("path")
var components = require("../views/components")
var readdirfiles = require("../library/readdirfiles")




async function test() {
	let data = await readdirfiles.readFiles(path.join(__dirname, "../controller"))
	console.log(data)
}

test()