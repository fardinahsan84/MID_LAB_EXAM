var express = require('express');
var router = express.Router();
var db 		= require.main.require('./models/db');
var userModel = require.main.require('./models/user-models');

router.get('/',function(req,res){
  if(req.session.username== null){
    res.redirect('/login');
  }
  else{
    var sql = "select * from users where username='"+req.session.username+"'";
    db.getResults(sql,function(results){

      res.render('admin',{userlist: results[0], name : req.session.username});
    });
  }
});

router.post('/',function(req,res){
  if(req.body.choice=="AddEmployee"){
    res.redirect('/admin/AddEmployee');
  }
  else if(req.body.choice=="AllEmployeeList"){
    res.redirect('/admin/AllEmployeeList');
  }
  else if(req.body.choice=="Logout"){
    req.session.username=null;
    res.redirect('/login');
  }
});

//AllEmployeeList
router.get('/AllEmployeeList', function(req, res){

	userModel.getAll(function(results){
    console.log(results);
		res.render('AllEmployeeList', { userList : results, username: req.session.username});
	});
});

//AddEmployee
router.get('/AddEmployee',function(req,res){
  if(req.session.username !=null){
    res.render('AddEmployee');
  }else{
    res.redirect('/login');
  }
});

router.post('/AddEmployee',function(req,res){
  if(req.session.username != null){

		var user ={
      name        : req.body.name,
			username 		: req.body.username,
			password   	: req.body.password,
      phone       : req.body.phone,
      address     : req.body.address,
      gender      : req.body.gender,
			userType	  : req.body.userType
		}

		userModel.insert(user, function(status){
			if(status){
				res.redirect('/admin/AllEmployeeList');
			}else{
				res.redirect('/admin/AddEmployee');
			}
		});
	}else{
		res.redirect('/login');
	}
});

//DELETE
router.get('/delete/:id',function(req,res){
  if(req.session.username== null){
    res.redirect('/login');
  }
  else{
    userModel.getById(req.params.id, function(result){
  		res.render('delete',{user : result});
  	});
  }
});

router.post('/delete/:id',function(req,res){
    userModel.delete(req.body.id, function(status){
      if(status){
        res.redirect('/admin/AllEmployeeList');
      }else{
        res.redirect('/admin/delete'+req.body.id);
      }
    });
});
module.exports = router;
