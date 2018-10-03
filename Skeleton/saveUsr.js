var db = require('./db');
var User = require('../schema/User');

module.exports = data => {
    var user = new User(data);
    user.save(err => {
        if(err) throw err;
        return console.log('user build saved!');
    })
}