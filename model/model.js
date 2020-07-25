// File       : ./model/model.js
// Description: Gather and return data

// ======================================

// Library
var index_data = require("./json/index.json")
var markdown = require("../library/markdown")
var md = require('markdown-it')();
require('dotenv').config() // Get configs

// ======================================

// Exports

// Funtion    : index_data
// Return type: JSON
// Description: Main JSON data
exports.index_data =  {
	"title": index_data.title,
	"description": index_data.description,
	"email": index_data.email,
	"idName": index_data.idName,
	"realName": index_data.realName,
	"selfDescription": index_data.selfDescription,
	"hobby": index_data.hobby,
	"expertise": index_data.expertise
}

// Funtion    : post_view_data(SerialNumber)
// Return type: JSON
// Description: Post content related JSON
exports.post_view_data = async (SerialNumber) => {
	var temp_json          = index_data
	var rawMarkdown        = await markdown.getPostContent(SerialNumber)
	var title              = markdown.getTitle(rawMarkdown)
	var tags               = markdown.getTags(rawMarkdown)
	var mdContent          = md.render(rawMarkdown)
	temp_json["mdContent"] = mdContent
	temp_json["postTitle"] = title
	temp_json["tags"]      = tags
	// Preserve for future change
	return temp_json
}
