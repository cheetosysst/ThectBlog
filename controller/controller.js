const router = require('express').Router()
const fs = require('fs')

const view = require("../views/view.js")

router.get('/', function (req, res) {
	view.index(req, res)
})

router.get('/github', function (req, res) {
	res.writeHead(301, {
		Location: 'https://github.com/cheetosysst/'
	});
	res.end()
})

router.get('/post', function (req, res) {
	res.write("post placeholder")
	res.end()
})

router.get('/post/:SerialNumber', function (req, res) {
	res.write("post SN placeholder")
	res.end()
})

router.get('/tag', function (req, res) {
	res.write("tag placeholder")
	res.end()
})

router.get('/search', function (req, res) {
	res.write("search placeholder")
	res.end()
})

router.get('/about', function (req, res) {
	res.write("about placeholder")
	res.end()
})

router.get('/FAQ', function (req, res) {
	res.write("FAQ placeholder")
	res.end()
})

module.exports = router