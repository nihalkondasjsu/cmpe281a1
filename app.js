var express = require('express');
var app = express();

const rdata = require('./lib/randomData.js');

app.get('/', function (req, res) {
    res.setHeader('content-type', 'text/html');
    res.send('<h1>Hello World</h1>');
});

app.get('/reportRandomAccident', function (req, res) {
    
});

app.listen( process.env.PORT || 3000 , function () {
  console.log('Example app listening on port '+(process.env.PORT || 3000)+'!');
    
    var admin = require("firebase-admin");

    var serviceAccount = require("./lib/my-project.json");

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://my-project-1495237203835.firebaseio.com"
    });

    var db = admin.database();
    var ref = db.ref("/AccidentReports");
    
    var val = rdata.randomAccident() ;
    
    ref.push(
        val,
        err => console.log(err ? 'error while pushing' : 'successful push')
    );
    
    ref.once("value", function(snapshot) {
      console.log(snapshot.val());
    });
    
});