var express = require('express');
var app = express();

const rdata = require('./lib/randomData.js');

var admin = require("firebase-admin");

var serviceAccount = require("./lib/my-project.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-project-1495237203835.firebaseio.com"
});

var db = admin.database();

var ref = db.ref("/AccidentReports");    

var cron = require('node-cron');
 
cron.schedule('*/5 * * * * *', () => {
  console.log('running a task every 5 secs');
    reportRandomAccident();
});

app.get('/', function (req, res) {
    res.sendFile('views/index.html', {root: __dirname });
    //res.setHeader('content-type', 'text/html');
    //res.send('<h1>Hello World</h1>');
});

app.get('/reportRandomAccident', function (req, res) {
    res.setHeader('content-type', 'text/html');
    
    res.send(reportRandomAccident());

});

app.listen( process.env.PORT || 3000 , function () {
  console.log('Example app listening on port '+(process.env.PORT || 3000)+'!');
    
    /*
    ref.once("value", function(snapshot) {
      console.log(snapshot.val());
    });
    */
    
});

function reportRandomAccident(){
    var val = rdata.randomAccident() ;
    
    ref.remove()
      .then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
    ref.push(
        val,
        err => return (err ? '<h1>error while pushing</h1>' : '<h1>successful push</h1>')
    );
}