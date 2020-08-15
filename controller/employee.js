var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-models');
const { body, validationResult } = require('express-validator');


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


router.get('/UpdateProfile',function(req,res){
  userModel.getUserByUsername(req.session.username, function(results){
    if(results.length > 0){
         res.render('employee/UpdateProfile',{user: results[0]});
      }else{
         console.log('Search not found');
      }
  });
});

router.post('/UpdateProfile/:id', function(req,res){/*[
            body('password')
                   .isLength({ min: 8 })
                   .matches(/^(?=.*d)(?=.*[a-z])(?=.[A-Z])[a-zA-Z\d@$.!%*#?&]/)
                   .withMessage('Password should be equal or greater than 8 character and contains (A-Z, a-z, 0-9, and special sign like @,#,$,& etc)'),
            body('phone')
                  .isNumeric()
                  .withMessage('Must be a numeric value')
                  .isLength({ min: 11 , max: 11})
                  .withMessage('Must be exactly 11 chars long')
          ],function(req,res){
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                console.log(errors);
                return res.status(422).json({ errors: errors.array() })
            }else{*/

                if (!req.files){
                     return res.status(400).send('No files were uploaded.');
                }else{
                     var file = req.files.uploaded_image;
                     var img_name=file.name;

                    if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){

                           file.mv('public/images/upload_images/'+file.name, function(err) {

                            if(err){

                               return res.status(500).send(err);
                            }else{
                                  var user = {
                                    password     :req.body.password,
                                    phone 			 :req.body.phone,
                                    address      :req.body.address,
                                    id           :req.params.id
                                  }


                                  userModel.updateEmployee(user,img_name, function(status){
                                      if(status){
                                        res.redirect('/employee/MyProfile');
                                      }else{
                                        res.redirect('/employee/UpdateProfile');
                                      }
                                 });
                           }
                          });
                    }else {
                         message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
                         res.render('employee/UpdateProfile',{message: message});
                       }
                  }

  });

module.exports = router;
