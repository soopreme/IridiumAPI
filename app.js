var x = require('./Skeleton/exp');
var db = require('./Skeleton/db');
var gateKeeper = require('./mod/gateKeeper');
var checkIn = require('./mod/checkIn');

x.a.use(x.e.json());

x.a.post('/register', (req, res) => {
    checkIn(req.body.uname, req.body.pword);
    var token = gateKeeper.genToken(req.body.uname, req.body.pword);
    return res.json({token})
})

x.a.use(gateKeeper.mw);

x.a.get('/loginCheck', (req, res) => {
    return res.send({isValid: true});
})

x.a.listen(8080);
console.log("8080");