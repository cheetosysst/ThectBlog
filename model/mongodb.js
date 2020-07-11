// File       : ./model/mongodb.js
// Description: Connects to mongo db if user choose to use mongodb.

// ======================================

// Library
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config() // Get configs

// Database object
const uri = process.env.DB_URL
const client = new MongoClient(uri, { useNewUrlParser: true })

// Connection
exports.dbConnect = async (collection) => {
	if (global.DEBUG) console.log("[DEBUG] Connecting to mongodb")
	client.connect(err => {
		if (err) throw err
		if (global.DEBUG) console.log("[DEBUG] Fail to connect to mongodb")
	})
}

// Search
exports.dbSearch = async (query) => {
	if (global.DEBUG) console.log("[DEBUG] Search query \"" + query + "\"")
	const collection = client.db(process.env.DB_NAME).collection(process.env.DB_COLL);
	//
}

// Close
exports.dbClose = async () => {
	client.close()
}
