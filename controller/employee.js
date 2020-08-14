var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-models');

router.get('/',function(req,res){
  if(req.session.username== null){
    res.redirect('/logout');
  }else{
  res.render('employee');
  }
});

router.post('/',function(req,res){
  if(req.body.choice=="MyProfile"){
    res.redirect('/employee/MyProfile');
  }
  else if(req.body.choice=="UpdateProfile"){
    res.redirect('/employee/UpdateProfile');
  }
});


router.get('/MyProfile',function(req,res){

      userModel.getUserByUsername(req.session.username, function(results){
        if(results.length > 0){
             res.render('employee/MyProfile',{userlist: results[0]});
          }else{
             console.log('Search not found');
          }
      });
});

router.post('/MyProfile',function(req,res){
  res.redirect('/employee')
});

router.get('/MyProfile',function(req,res){
  res.render('MyProfile');
});

router.post('/MyProfile',function(req,res){
  res.redirect('/employee')
});

module.exports = router;
