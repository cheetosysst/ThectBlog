var ejs = require("ejs")

var raw = "<%= test %>"
var json = {
	"test": "hello"
}

var html = ejs.render(raw, json)

console.log(html)