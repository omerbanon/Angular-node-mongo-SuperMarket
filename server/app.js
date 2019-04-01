var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());
app.use(require('express-session')
({ secret: 'fvvfdbdf434gfdfc',
 resave: true,
  saveUninitialized: true
 }));
app.use('/', indexRouter);
module.exports = app;

//set up passport
var client = require('./models/client.model');
passport.use(new LocalStrategy(client.authenticate()));
passport.serializeUser(client.serializeUser());
passport.deserializeUser(client.deserializeUser());
mongoose.connect('mongodb://localhost/shippingDB');