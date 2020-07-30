// getting-started.js
const mongoose = require('mongoose');

// var conn = mongoose.connect('mongodb+srv://MyUsername:MyPassword@mycluster-rkncu.mongodb.net/Fliqaindia?retryWrites=true&w=majority',
//  {useNewUrlParser: true , useCreateIndex:true, useUnifiedTopology: true}, 
//     ()=>{console.log('MongoDb Connected ***')}
// );

 var adminSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password : {
        type: String,
        required: true
    },

    date: { 
        type: Date, 
        default: Date.now 
    }

 })

 var adminModel = mongoose.model('users', adminSchema);
 module.exports = adminModel;