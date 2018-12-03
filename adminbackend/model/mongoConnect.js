var process = require("process");
var mongoose = require("mongoose");
var mongoConfig = require("../config/mongoConfig.json");

var dbUrl = mongoConfig.url;
var dbOptions = mongoConfig.options;

mongoose.connect(dbUrl,dbOptions);

// When successfully connected
mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + dbUrl);
  }); 
  
  // If the connection throws an error
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });
  
  // If the Node process ends, close the Mongoose connection 
  process.on('SIGINT', function() {  
    mongoose.connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 

module.exports = mongoose;