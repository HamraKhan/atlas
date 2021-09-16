const express = require('express')
let bookingRouter = express.Router()

bookingRouter.get('/', function(req, res) {
    res.json({availableDates:
        [
            '2021-09-17T10:00:00',
            '2021-09-17T11:00:00',
            '2021-09-17T12:00:00',
            '2021-09-17T13:00:00',
            '2021-09-17T14:00:00',
            '2021-09-17T15:00:00',
            '2021-09-17T16:00:00',
            '2021-09-17T17:00:00',
            '2021-09-17T18:00:00',
            '2021-09-17T19:00:00',
            '2021-09-17T20:00:00',
            '2021-09-17T21:00:00',
            '2021-09-17T22:00:00',
            '2021-09-17T23:00:00',
            '2021-09-17T24:00:00',
        ]
    })
});

bookingRouter.post('/', function(req, res) {
    res.json({state:'success'})
});

bookingRouter.put('/', function(req, res) {
    res.json({state:'success'})
});


module.exports = bookingRouter;

