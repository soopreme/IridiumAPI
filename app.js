var express = require('express');
var app = express();
var gateKeeper = require('./gateKeeper');

app.get('/register', (req, res) => {
    
})

app.use(gateKeeper());
