var mongoose = require("./mongoConnect.js");
var autoIncrement = require('mongoose-auto-increment');

var Schema = mongoose.Schema;

//schema 
var User = new Schema(
    {
      userId: Number,
      firstname: String,
      lastname: String,
      phone: Number,
      email: String,
      address: String,
      createdBy : String,
      createdOn : {type: Date, default: Date.now},
      updatedBy : String,
      updatedOn : {type: Date, default: Date.now}
    },{
        strict: false
    }
  );

autoIncrement.initialize(mongoose.connection);
User.plugin(autoIncrement.plugin, {model:'User', field:'userId', startAt:1})
module.exports = mongoose.model('empmgmts', User);