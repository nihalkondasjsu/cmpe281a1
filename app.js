var express = require('express');
var app = express();

var geoip = require('geoip-lite');

const requestIp = require('request-ip');

app.get('/', function (req, res) {
    res.setHeader('content-type', 'text/html');
    var ip = "207.97.227.239";
    console.log(ip);
    ip = requestIp.getClientIp(req);
    console.log(ip);
    var geo = geoip.lookup(ip);
    //res.send('<h1>'+JSON.stringify(geo)+'</h1>');
    res.send("<iframe "+
                "width='600' "+
                "height='450' "+
                "frameborder='0' style='border:0'"+
                "src='https://www.google.com/maps/embed/v1/place?key=AIzaSyD6X0yRsNqENwXXrl4fdpMqA08RND_E3f0"+
                "&location="+geo.ll[0]+","+geo.ll[1]+"' allowfullscreen>"+
                "</iframe>"
            );
});
app.listen( process.env.PORT || 3000 , function () {
  console.log('Example app listening on port '+(process.env.PORT || 3000)+'!');
    
    var ip = "207.97.227.239";
    var geo = geoip.lookup(ip);

    console.log(geo);
    
});

