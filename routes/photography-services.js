var express = require('express');
var router = express.Router();


var photoModel = require('../models/photographyBookings')


router.get('/beach-photography/', (req,res) => {
    res.render('services/photography/beach-photography.ejs')
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
        message: message,
        service: service
    })

    bookingDetails.save((err,data)=>{
        if (err) throw err;
        else
        res.render('services/photography/beach-photography.ejs');
        console.log('Submitted')
    })
})


router.get('/wedding-photography/', (req,res) => {
    res.render('services/photography/wedding-photography.ejs')
})

router.post('/wedding-photography/', (req,res) => {
    
    //getting value
    var name  =  req.body.user_name;
    var phone  = req.body.user_phone;
    var email  =  req.body.user_email;
    var message  =  req.body.user_message;
    var service = req.body.user_service;

    console.log(service);

    var bookingDetails = new photoModel({
        name: name,
        phone: phone,
        email: email,
        message: message,
        service: service
    })

    bookingDetails.save((err,data)=>{
        if (err) throw err;
        else
        res.render('services/photography/wedding-photography.ejs');
    })
})

router.get('/pre-wedding-photography/', (req,res) => {
    res.render('services/photography/pre-wedding-photography.ejs')
})

router.post('/wedding-photography/', (req,res) => {
    
    //getting value
    var name  =  req.body.user_name;
    var phone  = req.body.user_phone;
    var email  =  req.body.user_email;
    var message  =  req.body.user_message;
    var service = req.body.user_service;

    console.log(service);

    var bookingDetails = new photoModel({
        name: name,
        phone: phone,
        email: email,
        message: message,
        service: service
    })

    bookingDetails.save((err,data)=>{
        if (err) throw err;
        else
        res.render('services/photography/pre-wedding-photography.ejs');
    })
})

router.get('/portfolio-photoshoot/', (req,res) => {
    res.render('services/photography/portfolio-shoot.ejs')
})

router.post('/portfolio-photoshoot/', (req,res) => {
    
    //getting value
    var name  =  req.body.user_name;
    var phone  = req.body.user_phone;
    var email  =  req.body.user_email;
    var message  =  req.body.user_message;
    var service = req.body.user_service;

    console.log(service);

    var bookingDetails = new photoModel({
        name: name,
        phone: phone,
        email: email,
        message: message,
        service: service
    })

    bookingDetails.save((err,data)=>{
        if (err) throw err;
        else
        res.render('services/photography/portfolio-shoot.ejs');
    })
})


router.get('/birthday-photography/', (req,res) => {
    res.render('services/photography/birthday-photography.ejs')
})

router.post('/birthday-photography/', (req,res) => {
    
    //getting value
    var name  =  req.body.user_name;
    var phone  = req.body.user_phone;
    var email  =  req.body.user_email;
    var message  =  req.body.user_message;
    var service = req.body.user_service;

    console.log(service);

    var bookingDetails = new photoModel({
        name: name,
        phone: phone,
        email: email,
        message: message,
        service: service
    })

    bookingDetails.save((err,data)=>{
        if (err) throw err;
        else
        res.render('services/photography/birthday-photography.ejs');
    })
})


router.get('/drone-service/', (req,res) => {
    res.render('services/photography/drone-service.ejs')
})

router.post('/drone-service/', (req,res) => {
    
    //getting value
    var name  =  req.body.user_name;
    var phone  = req.body.user_phone;
    var email  =  req.body.user_email;
    var message  =  req.body.user_message;
    var service = req.body.user_service;

    console.log(service);

    var bookingDetails = new photoModel({
        name: name,
        phone: phone,
        email: email,
        message: message,
        service: service
    })

    bookingDetails.save((err,data)=>{
        if (err) throw err;
        else
        res.render('services/photography/drone-service.ejs');
    })
})

router.get('/cocktail-party-photoshoot/', (req,res) => {
    res.render('services/photography/cocktail-party-photoshoot.ejs')
})

router.post('/cocktail-party-photoshoot/', (req,res) => {
    
    //getting value
    var name  =  req.body.user_name;
    var phone  = req.body.user_phone;
    var email  =  req.body.user_email;
    var message  =  req.body.user_message;
    var service = req.body.user_service;

    console.log(service);

    var bookingDetails = new photoModel({
        name: name,
        phone: phone,
        email: email,
        message: message,
        service: service
    })

    bookingDetails.save((err,data)=>{
        if (err) throw err;
        else
        res.render('services/photography/cocktail-party-photoshoot.ejs');
    })
})



module.exports = router;