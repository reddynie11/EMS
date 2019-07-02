const mongoose = require('mongoose');

var schema = mongoose.Schema;

var registerSma = new schema({
    username : {
        type : String,
        required:[true, 'Username is required'],
        unique:[true, 'username already taken']
    },
    email : {
        type : String,
        required:[true, 'Username is required'],
        unique:[true, 'username already taken']
    },
    password : {
        type : String
    }
});
module.exports = mongoose.model('hrModel', registerSma,'hrCollection');