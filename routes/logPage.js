const express = require('express');
const router = express.Router();

router.use('/log',(req,res)=>{
    res.json('Login Page');


});

module.exports = router;