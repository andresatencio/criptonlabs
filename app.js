
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http');

var app = express();

require('./config/express')(app, express);

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits)
  console.log(fruits.reverse());
});
