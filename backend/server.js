const express = require('express');
const app = express();
const port = 3000;

var path = require('path');
var public = path.join(__dirname, '../frontend');


app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'dashboard.html'));
});

app.use('/', express.static(public));

// // Setting up the public directory
// app.use(express.static('./../frontend'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('../frontend/dashboard.html'));
// });



app.listen(port, () => console.log(`listening on port ${port}!`));