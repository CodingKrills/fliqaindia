// getting-started.js
const mongoose = require('mongoose');


 var photoSchema = new mongoose.Schema({

    name: {
        type: String
    },

    phone:{
        type: String
    },

    email: {
        type: String
    },

    service: {
        type: String
    },

    message:{
        type: String
    },

    date: { 
        type: Date, 
        default: Date.now 
    }

 })

 var photoModel = mongoose.model('photographyBookings', photoSchema);
 module.exports = photoModel;