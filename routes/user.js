const express = require('express');
const router = express.Router();
const hrData = require('../models/hrModel');

router.get('/register',(req,res)=>{
    res.render('register.ejs');
});
router.get('/login',(req,res)=>{
    res.render('login.ejs');
});

router.post('/register', (req,res)=>{
    var hrd = new hrData();
    hrd.username = req.body.uid;
    hrd.email = req.body.email;
    hrd.password = req.body.pwd2;
    
    hrd.save((err)=>{
        if(err) {throw err;}
        else{console.log(hrd);}
    });
    //res.location('/login');
    res.redirect('/hr/login');


});

module.exports = router;

