'use strict';

const Promise = require('bluebird');
const Robot = require('../models/Robot');

exports.findRobotByMaster = username =>
  new Promise((resolve, reject) => {
    Robot.findOne({master: username}, (err, existingRobot) => {
      if (err) reject(err); // TODO: Check that reject short circuits ops here
      resolve(existingRobot);
    })
  });

exports.createRobot = username =>
  new Promise((resolve, reject) => {
    new Robot({
      master: username,
    }).save((err, newRobot) => {
      if (err) reject (err);
      resolve(newRobot);
    });
  });
