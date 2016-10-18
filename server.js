var express = require('express')
var app = express()

var moment = require('moment')
moment().format();
var timeDetect = require('./timeDetect')

app.get('/:query', function(req, res) {
    console.log(req.params.query)
    console.log(typeof req.params.query)
    var dates = timeDetect(req.params.query)
    res.send(dates)
})

app.listen(8080, function() {
    console.log('Example app running on port 8080')
})