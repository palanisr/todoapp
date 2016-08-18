var express=require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app=express();


var port = process.env.PORT || 3000;

app.listen(port,function(){
  console.log('App running on PROT : '+ port,'\nPress Ctrl + C to terminate');
});

mongoose.connect('localhost', 'replenishment', function(err){
  if(err){
    console.log('Database connection error: ' + err);
    process.exit(1);
  }
});

mongoose.connection.on('connected', function() {
  // var wallmart = require('./server/models/walmart.model')(app);
  var todo = require('./server/models/todos.model')(app);
  require('./server/routes/todos.routes')(app);
});


// mongoose.connection.on('connected',function(){
//   //require('./server/routes/user');
//
// });
// mongoose.connection.on('error',function(){
//   console.log('Mongoose default connection error: ' + err);
// });
// mongoose.connection.on('disconnected',function(){
//   mongoose.connection.close(function () {
//      console.log('Mongoose default connection disconnected through app termination');
//      process.exit(0);
//    });
// });
