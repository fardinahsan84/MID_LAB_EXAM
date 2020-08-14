var express = require('express');
var router = express.Router();

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
  res.render('MyProfile');
});

router.post('/MyProfile',function(req,res){
  res.redirect('/employee')
});

module.exports = router;


module.exports = router;
