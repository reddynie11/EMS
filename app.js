const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db');

const port = process.env.PORT || 5000;
const app = express();

var home = require('./routes/home');
var login = require('./routes/login');

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', home);
app.get('/login',login);












app.listen(5000);