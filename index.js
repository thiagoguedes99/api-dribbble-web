var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));


app.all('*', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + 'dist', 'index.html'));
});

app.all('**', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + 'dist', 'index.html'));
});

app.listen(process.env.PORT || 5000);