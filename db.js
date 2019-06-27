//database connect 
const mongoose = require('mongoose');

module.exports= mongoose.connect('mongodb://localhost/firstdb',(err)=>{
    if(err){throw err}
    else{console.log('connection established')}
});