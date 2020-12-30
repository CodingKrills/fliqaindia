const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

var conn = mongoose.connect('xxx',
 {useNewUrlParser: true , useCreateIndex:true, useUnifiedTopology: true}, 
    ()=>{console.log('MongoDb Connected ***')}
);

//IMPORTING BODY-PARSER
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//SETTING UP PUBLIC DIRECTORY
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

//SETTING VIEW ENGINE
app.set('view engine', 'ejs');

//IMPORTING ROUTES
var indexRoute = require('./routes/index'); 
var photographyRoute = require('./routes/photography-services');
var graphicsRoute = require('./routes/graphics-service');
var freelancerRoute = require('./routes/freelancers')
var adminRoute = require('./routes/admin'); 
var adminBookingRoute = require('./routes/adminBookings'); 

//USING ROUTES
app.use('/', indexRoute);
app.use('/services/photography', photographyRoute);
app.use('/services/graphics', graphicsRoute);
app.use('/freelancers/photography', freelancerRoute);
app.use('/admin', adminRoute);
app.use('/admin/dashboard', adminBookingRoute);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.send('error');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
