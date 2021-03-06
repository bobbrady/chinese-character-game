'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const charController = require('./characters/character-controller');

const port = config.port || 3000;
const app = express();

/******************************************************************************
**  Add middlewares
******************************************************************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/characters', charController);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


var server = app.listen(port, () => {
  console.log('Character microservice listening on port ' + port);
});

module.exports = app;
