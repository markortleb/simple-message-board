const path = require('path');
const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);

module.exports = app;
