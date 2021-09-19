const express = require('express')
let bookingRouter = express.Router()
const { check, validationResult, matchedData } = require('express-validator');

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
//bookingId, customerId, tableId, partySize, reservationDatetime
//{"bookingId": 1, "customerId": 1, "tableId": 6, "partySize": 6, "reservationDatetime": 1632423389} 
bookingRouter.post('/', [
    check('customerId')
        .not() 
        .isEmpty()
        .isNumeric()
        .withMessage('customer ID is required and should be a number'),
        check('partySize')
        .not() 
        .isEmpty()
        .isNumeric()
        .withMessage('party size is required and should be a number'),
        check('reservationDatetime')
        .not() 
        .isEmpty()
        .isNumeric()
        .withMessage('reservation Datetime is required and should be a number')
],
function(req, res) {
    const errors =  validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    else {
        const matched = matchedData(req, {
            includeOptionals: false,
          });
        res.json({ state: 'success'})
    }
});

bookingRouter.put('/', function(req, res) {
    res.json({state:'success'})
});


module.exports = bookingRouter;

