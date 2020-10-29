var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newsRouter = require('./routes/newsAPI');
var recRouter = require('./routes/recipeAPI');
var youRouter = require('./routes/youtubeAPI');
var imgRouter = require('./routes/imgAPI');
var geoRouter = require('./routes/geoApi');
var placeRouter = require('./routes/placeAPI');
var unirest = require("unirest");
var app = express();

const api_helper = require('./API_helper');

const port = process.env.PORT || 5000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/newsAPI', newsRouter); //Use newsRouter for newsAPI
app.use('/recipeAPI', recRouter); //Use recRouter for recipieAPI
app.use('/youtubeAPI', youRouter); //Use youRouter for youtubeAPI
app.use('/imgAPI', imgRouter);
app.use('/geoAPI', geoRouter);
app.use('/placeAPI', placeRouter);

app.listen(port, () => console.log('Listening on port ' + port));

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
