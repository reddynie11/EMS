const express = require('express');
const router = express.Router();
const hrData = require('../models/hrModel');
const bcrypt = require('bcryptjs');

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
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(hrd.password, salt, function(err, hash) {
            hrd.password=hash;
            hrd.save((err)=>{
                if(err) {throw err;}
                else{console.log(hrd);}
            });
        });
    });
    res.redirect('/hr/login');
});

module.exports = router;

