var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.render('home')
})

router.get('/about', (req,res) => {
    res.render('about')
})

router.get('/services', (req,res) => {
    res.render('services')
})

router.get('/freelancers', (req,res) => {
    res.render('freelancers')
})


//Photography Services

router.get('/services/photography', (req,res) => {
    res.render('services/photography')
})

router.get('/services/graphics', (req,res) => {
    res.render('services/graphics')
})


module.exports = router;