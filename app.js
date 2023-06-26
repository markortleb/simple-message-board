const path = require('path');
const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use('/', indexRouter);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;
