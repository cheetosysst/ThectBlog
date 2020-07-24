// File       : ./model/mongodb.js
// Description: Connects to mongo db if user choose to use mongodb.

// ======================================

// Library
require('dotenv').config() // Get configs

// Database object

// Connection
exports.dbConnect = async (collection) => {
	if (global.DEBUG) console.log("[DEBUG] Connecting to sqlite")
}

// Search
exports.dbSearch = async (query) => {
	if (global.DEBUG) console.log("[DEBUG] Search query \"" + query + "\"")
}

// Close
exports.dbClose = async () => {
}
