'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const winston = require('winston');
const helmet = require('helmet');

/** Load environment variables from .env file if dev mode **/
if (process.env.NODE_ENV === 'development') {
  dotenv.load({ path: '.env' });
}

/** Create Express Server **/
const app = express();
const PORT = process.env.PORT || 8080;

/** Server config **/
app.use(bodyParser.json());
app.use(helmet());

/** Connect MongoDB **/
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

/** Express Routers **/
const apiRouter = require('./routers/api');

/** Install Express Routers **/
app.use('/api', apiRouter);

/** Start Server **/
app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }
  winston.info(`Listening on port ${PORT}`);
});

module.exports = app;
