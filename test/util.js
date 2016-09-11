'use strict';

const Promise = require('bluebird');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Table = require('../server/models/Table');
const Robot = require('../server/models/Robot');

exports.connectDB = () =>
  new Promise((resolve, reject) => {
    dotenv.load({ path: '../../.env' });
    mongoose.Promise = require('bluebird');
    mongoose.connect(process.env.MONGODB_URI_TEST);
    mongoose.connection.on('error', () => {
      console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
      reject();
    });
    resolve();
  });

exports.clearDB = () =>
  new Promise((resolve, reject) => {
    Table.remove(tableErr => {
      if (tableErr) reject(tableErr);
      Robot.remove(robotErr => {
        if (robotErr) reject(robotErr);
        resolve();
      });
    });
  });
