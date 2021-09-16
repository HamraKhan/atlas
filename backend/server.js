const express = require('express');
const app = express();
const port = 3000;

const bookingsRoute = require('./booking/bookingRoute')
const customerRoute = require('./customer/customerRoute')

let path = require('path');
let public = path.join(__dirname, '../frontend');

// * Routes * //
app.use('/', express.static(public));
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'dashboard.html'));
});

app.use('/bookings', bookingsRoute);
app.use('/customers', customerRoute);

app.listen(port, () => console.log(`listening on port ${port}!`));