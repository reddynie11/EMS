const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db');

const port = process.env.PORT || 5000;
const app = express();

var home = require('./routes/home');
var user = require('./routes/user');
var logPage = require('./routes/logPage');

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/', home);
app.use('/hr', user);












app.listen(port);