const router = require('express').Router()
const fs     = require('fs')

const view   = require("../views/view.js")

router.get('/', function(req, res) {
	view.index(req, res)
})

module.exports = router