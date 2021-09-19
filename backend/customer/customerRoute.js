const express = require('express')
let customerRoute = express.Router()

const { check, validationResult } = require('express-validator');

customerRoute.post('/', [
    check('name')
        .not() 
        .isEmpty()
        .withMessage('Name is required'),
    check('email', 'Email is required')
        .isEmail()
], 
(req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }
        else {
            const matched = matchedData(req, {
                includeOptionals: false,
              });
            res.json({ state: 'success' })
        }
    }
);

module.exports = customerRoute;
