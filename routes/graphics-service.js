var express = require('express');
var router = express.Router();


var photoModel = require('../models/photographyBookings')


router.get('/logo-design/', (req,res) => {
    res.render('services/graphics/logo-design')
})

router.get('/buisiness-card-design/', (req,res) => {
    res.render('services/graphics/business-card-design')
})

router.get('/ui-ux-design/', (req,res) => {
    res.render('services/graphics/ui-ux-design')
})

router.get('/brochure-and-flyers/', (req,res) => {
    res.render('services/graphics/brochure-flyers')
})

router.get('/motion-graphics/', (req,res) => {
    res.render('services/graphics/motion-graphics')
})

router.get('/poster-and-banners/', (req,res) => {
    res.render('services/graphics/poster-banner')
})

router.get('/infographics/', (req,res) => {
    res.render('services/graphics/infographics')
})



router.post('/beach-photography', (req,res) => {
    
    //getting value
    var name  =  req.body.user_name;
    var phone  = req.body.user_phone;
    var email  =  req.body.user_email;
    var message  =  req.body.user_message;

    console.log(req.body.user_name);

    var bookingDetails = new photoModel({
        name: name,
        phone: phone,
        email: email,
        message: message
    })

    bookingDetails.save((err,data)=>{
        if (err) throw err;
        else
        res.render('services/photography/beach-photography.ejs');
        console.log('Submitted')
    })
})

module.exports = router;