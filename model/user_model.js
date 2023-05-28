const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    name : {
        type: String,
        default : null,
        required : true
    },
    last_name:{
        type: String,
        default : null,
        required : true
    },
    phone_number:{
        type: String,
        default : null,
        required : true
    }
});

module.exports = mongoose.model('user',user);