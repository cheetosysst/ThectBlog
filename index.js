var express = require('express');
var app = express();
var fs = require('fs');

import 'bootstrap';

app.get('/', function (req, res) {
	res.send('Hello World');
})

app.get('/test', function(req, res){
	fs.readFile(__dirname + '/template/index.html', 'utf8', function(err, html){
		res.write(html)
		res.end()
	})
})

app.use('/static', express.static('public'));

var server = app.listen(8081, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("Open @ http://%s:%s", host, port)

})