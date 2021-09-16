const express = require('express')
let customerRoute = express.Router()

customerRoute.post('/', function(req, res) {
    res.json({state:'success'})
});

module.exports = customerRoute;
