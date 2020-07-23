// Library

require('dotenv').config() // Get configs

// ======================================

exports.controller = (req, res) => {
    if (global.DEBUG) console.log("[DEBUG] ./controller/github.controller.js github route") // This one doesn't work, but it's working properly, so let's ignore that.
	res.writeHead(301, {
		Location: process.env.GITHUB
	})
	res.end()
}