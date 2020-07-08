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
	var mdContent = ""
	md.getPostContent(SerialNumber).then((data)=>{
		var temp = data.toString("utf8")
		console.log(temp)
		mdContent = temp
		while(true) {
			if (mdContent !== "") break
		}
	})
	temp_json["mdContent"] = mdContent
	return temp_json
}
