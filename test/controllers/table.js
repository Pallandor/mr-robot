'use strict';

const expect = require('chai').expect;
const mock = require('../mock');
const Table = require('../../server/models/Table');
const tableController = require('../../server/controllers/table');

module.exports = () => {
  describe('Table Controllers', () => {
    it('should begin empty', done => {
      Table.count((err, count) => {
        if (err) done(err);
        expect(count).to.equal(0);
        done();
      })
    });
    it('should add a new Table and Robot a new user', done => {
      tableController.getTableByUsername(mock.getUserUsername(0))
        .then(selectedTable => {
          expect(selectedTable.currentUsersTurn).to.equal(mock.getUserUsername(0));
          expect(selectedTable.robots.length).to.equal(1);
          done();
          // NOTE: Consider integrating Robot tests
        })
        .catch(err => done(err));
    });
    it('should run an empty test', done => {
      expect(true).to.equal(true);
      done();
    });
  });
};
//
//
// exports.findTableByRobotId = robotId =>
//
// exports.findAvailableTable = () =>
//
// exports.createTable = (username, firstRobotId) =>
//
// exports.addRobotToAvailableTable = (username, robotId) =>
//
// exports.getTableByUsername = username =>
