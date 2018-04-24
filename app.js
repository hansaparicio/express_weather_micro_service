

var express = require ('express');
var app = express ();
var controller = require('./controller')
var request = require('xhr-request');


app.get('/buenosAiresDB', function(req, res){
    var db = controller.getDB();
    console.log(db);
    res.send(db);

});

app.get('/getCurrentForecast', function(req, res){
    request('http://api.apixu.com/v1/current.json?key=abfb6ea745814806908201701181504&q=Buenos Aires&lang=es', {
        json: true
    }, function (err, data) {
        if (err) throw err;
        var respond = controller.getCurrentForecast(data);
        res.send(respond);
    })
});


app.listen (3000, function(){
    console.log('current forecast buenos aires information server')
});