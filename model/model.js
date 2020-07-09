var index_data = require("./json/index.json")
var md = require("./markdown")

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


exports.post_view_data = (SerialNumber) => {
	var temp_json = index_data
	// Preserve for future change
	return temp_json
}
