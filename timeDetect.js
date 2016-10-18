var moment = require('moment')

module.exports = function(d) {
    const unixDate = Date.parse(d)
    var obj = {}
    
    if (d == parseInt(d)) {
        obj.type = 'unix format'
        obj.unix = d
        obj.dateString = new Date(Number(d)).toDateString()
    } else if (!isNaN(Date.parse(d))) {
        obj.type = 'string format'
        obj.unix = moment(d).format('x')
        obj.dateString = d
    } else {
        obj.type = 'no date'
    }
    return obj
}