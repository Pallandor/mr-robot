'use strict';

const expect = require('chai').expect;
const mock = require('../mock');
const Table = require('../../server/models/Table');
const tableController = require('../../server/controllers/table');

module.exports = () => {
  // NOTE: Break describe suites down to operative controllers?
  describe('Table Controllers', () => {
    describe('# getTableByUsername', () => {
      it('should begin empty', done => {
        Table.count((err, count) => {
          if (err) done(err);
          expect(count).to.equal(0);
          done();
        });
      });
      it('should add a new Table (and Robot) for a first new user', done => {
        tableController.getTableByUsername(mock.getUsername(0))
          .then(selectedTable => {
            mock.updateUserTable(0, selectedTable);
            expect(selectedTable.currentUsersTurn).to.equal(mock.getUsername(0));
            expect(selectedTable.robots.length).to.equal(1);
            done();
            // NOTE: Consider integrating Robot tests here? Or keep separate?
          })
          .catch(err => done(err));
      });
      it('should add a new Robot for a new user on an available Table if possible', done => {
        tableController.getTableByUsername(mock.getUsername(1))
          .then(selectedTable => {
            mock.updateUserTable(0, selectedTable);
            mock.updateUserTable(1, selectedTable);
            expect(selectedTable.id).to.equal(mock.getTableId(0));
            expect(selectedTable.currentUsersTurn).to.equal(mock.getUsername(0));
            expect(selectedTable.robots.length).to.equal(2);
            done();
          })
          .catch(err => done(err));
      });
      it('should not add a new Robot or Table for an existing user', done => {
        tableController.getTableByUsername(mock.getUsername(1))
          .then(selectedTable => {
            expect(selectedTable.id).to.equal(mock.getTableId(0));
            expect(selectedTable.id).to.equal(mock.getTableId(1));
            expect(selectedTable.robots.length).to.equal(2);
            done();
          })
          .catch(err => done(err));
      });
      it('should create a new Robot and Table for a new user if existing Tables are full', done => {
        // NOTE: Test has hard-coded dependency on knowledge of robotLimit being 4!
        tableController.getTableByUsername(mock.getUsername(2))
        .then(selectedTable => {
          mock.updateUserTable(0, selectedTable);
          mock.updateUserTable(1, selectedTable);
          mock.updateUserTable(2, selectedTable);
          expect(selectedTable.id).to.equal(mock.getTableId(0));
          expect(selectedTable.id).to.equal(mock.getTableId(2));
          expect(selectedTable.robots.length).to.equal(3);
        })
        // NOTE: To guarantee promise chain order, return in format: function(){ return promiseGenerator()}
        .then(() => tableController.getTableByUsername(mock.getUsername(3)))
        .then(selectedTable => {
          mock.updateUserTable(0, selectedTable);
          mock.updateUserTable(1, selectedTable);
          mock.updateUserTable(2, selectedTable);
          mock.updateUserTable(3, selectedTable);
          expect(selectedTable.id).to.equal(mock.getTableId(0));
          expect(selectedTable.id).to.equal(mock.getTableId(3));
          expect(selectedTable.robots.length).to.equal(4);
        })
        .then(() => tableController.getTableByUsername(mock.getUsername(4)))
        .then(selectedTable => {
          mock.updateUserTable(4, selectedTable);
          expect(selectedTable.id).to.not.equal(mock.getTableId(0));
          expect(selectedTable.id).to.not.equal(mock.getTableId(3));
          expect(selectedTable.robots.length).to.equal(1);
          expect(selectedTable.currentUsersTurn).to.equal(mock.getUsername(4));
          done();
        })
        .catch(err => done(err));
      });
      it('should still not add a new Robot or Table for an existing user', done => {
        tableController.getTableByUsername(mock.getUsername(4))
          .then(selectedTable => {
            expect(selectedTable.id).to.equal(mock.getTableId(4));
            expect(selectedTable.robots.length).to.equal(1);
            expect(selectedTable.currentUsersTurn).to.equal(mock.getUsername(4));
            done();
          })
          .catch(err => done(err));
      });
      // NOTE: Can add further test cases here
    });

    describe('# findTableByRobotId', () => {
      it('should return a Table by RobotId', done => {
        tableController.findTableByRobotId(mock.getUser(0).table.robots[0])
          .then(selectedTable => {
            const expectedTable = mock.getTable(0);
            expect(selectedTable.id).to.equal(expectedTable.id);
            expect(selectedTable.robots.length).to.equal(expectedTable.robots.length);
            expect(selectedTable.robots).to.include(mock.getUser(0).table.robots[0]);
            expect(selectedTable.currentUsersTurn).to.equal(expectedTable.currentUsersTurn);
          })
          .then(() => tableController.findTableByRobotId(mock.getUser(4).table.robots[0]))
          .then(selectedTable => {
            const expectedTable = mock.getTable(4);
            expect(selectedTable.id).to.equal(expectedTable.id);
            expect(selectedTable.robots.length).to.equal(expectedTable.robots.length);
            expect(selectedTable.robots).to.include(mock.getUser(4).table.robots[0]);
            expect(selectedTable.currentUsersTurn).to.equal(expectedTable.currentUsersTurn);
            done();
          })
          .catch(err => done(err));
      });
    });
    describe('# findAvailableTable', () => {
      it('should return either an existing Table if possible', done => {
        tableController.findAvailableTable()
          .then(availableTable => {
            const expectedTable = mock.getTable(4);
            expect(availableTable.id).to.equal(expectedTable.id);
            expect(availableTable.robots.length).to.equal(expectedTable.robots.length);
            expect(availableTable.currentUsersTurn).to.equal(expectedTable.currentUsersTurn);
            done();
          })
          .catch(err => done(err));
      });
    });
    describe('# createTable', () => {
      it('should create a new Table', done => {
        // NOTE: Need to decouple unit tests from e2e testing!
        expect(true).to.equal(true);
        done();
      });
    });
    describe('# addRobotToAvailableTable', () => {
      it('should add a Robot to an existing Table or create a new Table if required', done => {
        // NOTE: Need to decouple unit tests from e2e testing!
        expect(true).to.equal(true);
        done();
      });
    });
  });
};
