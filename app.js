//Application file
//Contributers: Shyla Grantmyre, Schevene Singh, Alyssa Brown, Liam Edwards
//DSA Survey Site
///App JS page that runs the mongoose server and express for the application
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require ('express-session');

var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Setup Mongoose connection
mongoose.connect(
  'mongodb+srv://Schevene:fuckinpw@dsa-cluster-3ehfp.azure.mongodb.net/test?retryWrites=true&w=majority',
  {useNewUrlParser: true}
);
var db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log('Connected to MongoDB'));

//Declare routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Authentication Startup/Setup
app.use(
  session({
    secret: 'cucumber',
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

const User = require('./models/user');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Authentication of the app
app.use((req, res, next) => {
  res.locals.isAuthenticated= req.isAuthenticated();
  next();
});

//Routes
app.use('/', authRouter)
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
