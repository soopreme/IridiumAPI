const jwt = require('jsonwebtoken');
const config = require('../config.json');
const User = require('../schema/User');

exports.mw = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.sendStatus(403);
    }
    var token = req.headers.authorization.split(' ');
    jwt.verify(token[1], config.secret, (err, decoded) => {
        if(err) res.sendStatus(403);
        next();
    });
};

exports.genToken = (username, password) => {
    User.findOne({ 'username': username }, 'password', (err, user) => {
        if (err) return err;

        User.comparePassword(password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                var token = jwt.sign({name: username }, config.secret);
                return token;
            } else {
                throw "incorrect password";
            }
        })
    })
}