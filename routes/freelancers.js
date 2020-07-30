var express = require('express');
var router = express.Router();

router.get('/AkashLohar', (req,res) => {
    res.render('freelancers/photography/AkashLohar')
})

router.get('/JitChakraborty', (req,res) => {
    res.render('freelancers/photography/JitChakraborty')
})

router.get('/DineshSuthar', (req,res) => {
    res.render('freelancers/photography/DineshSuthar')
})

router.get('/SajuR', (req,res) => {
    res.render('freelancers/photography/SajuR')
})

module.exports = router;