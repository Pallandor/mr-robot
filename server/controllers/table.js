'use strict';

const Promise = require('bluebird');
const Table = require('../models/Table');
const robotController = require('./robot');

exports.findTableByRobotId = robotId =>
  new Promise((resolve, reject) => {
    Table.findOne({robots: robotId}, (err, existingTable) => {
      if (err) reject(err);
      resolve(existingTable);
    });
  });

exports.findAvailableTable = () =>
  new Promise((resolve, reject) => {
    Table.findOne({$where: 'this.robots.length < this.robotLimit'}, (err, availableTable) => {
      if (err) reject(err);
      resolve(availableTable);
    });
  });

exports.createTable = (username, firstRobotId) =>
  new Promise((resolve, reject) => {
    new Table({
      robots: [firstRobotId],
      currentUsersTurn: username,
    }).save((err, createdTable) => {
      if (err) reject(err);
      resolve(createdTable);
    });
  });

// TODO: Fix composed promise here, anti-pattern!
exports.addRobotToAvailableTable = (username, robotId) =>
  exports.findAvailableTable()
    .then(availableTable => {
      if (availableTable) {
        availableTable.robots.push(robotId);
        return availableTable.save();
      }
      return exports.createTable(username, robotId);
    });

exports.getTableByUsername = username =>
  robotController.findRobotByMaster(username)
    .then(existingRobot => {
      if (existingRobot) {
        return exports.findTableByRobotId(existingRobot.id);
      }
      return robotController.createRobot(username)
        .then(createdRobot => exports.addRobotToAvailableTable(username, createdRobot.id));
    });
