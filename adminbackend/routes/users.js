var express = require('express');
var router = express.Router();

//connect to services
var userServices = require("../services/userServices");

router.get('/', function(req, res, next) {
  //send request to services 
  userServices.getUsers(function(err, data){  
       res.json(data);
   });
});

router.get('/:id', function(req, res, next) {
  userServices.getUserById(req, function(err,data){
      if(!err){
          res.json(data);
      }else{
          res.json(err);
      }  
  });              
});

router.post('/', function(req, res, next) {
  userServices.createUser(req, function(err,data){
      if(!err){
          res.json(data);
      }else{
          res.json(err);
      }
  }); 
});

router.put('/:id', function(req, res, next) {  
  userServices.updateUser(req, function(err,data){
      if(!err){
          res.json(data);
      }else{
          res.json(err);
      }
  }); 
});

router.delete('/:id', function(req, res, next) {
  userServices.deleteUser(req, function(err,data){
      if(!err){
          res.json(data);
      }else{
          res.json(err);
      }
  });
});

module.exports = router;
