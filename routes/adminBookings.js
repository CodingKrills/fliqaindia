var express = require('express');
var router = express.Router();

//requiring bcrypt js
var bcrypt = require('bcrypt');

//IMPORTING JWT
var jwt = require('jsonwebtoken');

//IMPORTING NODE LOCAL STORAGE
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
  
//IMPORTING USER MODEL
var userModel = require('../models/admin')
var photoModel = require('../models/photographyBookings')

//Middleware Function to check Authentication

function checkLoginUser(req,res,next){

    var userToken = localStorage.getItem('userToken');

    //using try catch of jwt

    try {
        var decoded = jwt.verify(userToken, 'LoginToken');
      } catch(err) {
        res.redirect('/')
      }

    next();

}

//Middleware Function to check Dublicacity of email

function checkEmail(req,res,next){

    var email = req.body.email;

    var checkexitemail= userModel.findOne({email:email});

    checkexitemail.exec((err,docs) => {
        if(err) throw err;
        
        if(docs) 
        return res.render('admin/adminSignup', {

            title: 'Sign Up',
            msg : 'Username Already Exists !'
    
        })

        next();

     })
}

//Middleware Function to check Dublicacity of email

function checkUsername(req,res,next){

    var username = req.body.username;

    var checkexitusername= userModel.findOne({username:username});

    checkexitusername.exec((err,docs) => {
        if(err) throw err;
        
        if(docs) 
        return res.render('admin/signup', {

            title: 'Sign Up',
            msg : 'username Id Already Exists !'
    
        })

        next();

     })
}



//Getting the Datas 
var getPhotoModel= photoModel.find({});

//Get password-category page -> password_category Page

router.get('/adminPhotographyBookings', checkLoginUser, (req,res) => {

    //getting user data from localstorage 
    var loginUsername = localStorage.getItem('loginUsername');

    getPhotoModel.exec( (err, data)=>{

        if (err) throw err
        else
        res.render('admin/adminPhotographyBookings', {

            title: 'Photography Bookings',
            loginUsername : loginUsername,
            records: data
    
        })

    } )

})




//Get logout page -> no page
//unset the jwt token userID & username
router.get('/logout', (req,res) => {

    localStorage.removeItem('userToken');
    localStorage.removeItem('loginUsername')

    //redirect to /
    res.redirect('/');
})


module.exports = router;