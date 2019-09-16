var express = require('express');
var app = express();

var geoip = require('geoip-lite');

app.get('/', function (req, res) {
    res.setHeader('content-type', 'text/html');
    var ip = "207.97.227.239";
    console.log(ip);
    ip = req.connection.remoteAddress;
    console.log(ip);
    var geo = geoip.lookup(ip);
    res.send('<h1>'+JSON.stringify(geo)+'</h1>');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
    
    var ip = "207.97.227.239";
    var geo = geoip.lookup(ip);

    console.log(geo);
    
});

