const path = require('path');
const express = require('express');

const indexRouter = require('./routes/index');
const newMessageRouter = require('./routes/newMessage')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newMessageRouter);



module.exports = app;
