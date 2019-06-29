const mongoose = require('mongoose');

var schema = mongoose.Schema;

var registerSma = new schema({
    username : {type : String},
    email : {type : String},
    password : {type : String},
});
module.exports = mongoose.model('hrModel', registerSma,'hrCollection');