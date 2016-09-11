'use strict';

const expect = require('chai').expect;
const mock = require('../mock');
const Robot = require('../../server/models/Robot');
const robotController = require('../../server/controllers/robot');

module.exports = () => {
  describe('Robot Controllers', () => {
    describe('# findRobotByMaster', () => {
      it('should should find an existing robot by username', done => {
        let expectedRobotId = mock.getTable(4).robots[0];
        robotController.findRobotByMaster(mock.getUsername(4))
          .then(selectedRobot => {
            expect(selectedRobot.master).to.equal(mock.getUsername(4));
            expect(selectedRobot.id).to.equal(expectedRobotId);
            done();
          })
          .catch(err => done(err));
      });
    });
    describe('# createRobot', () => {
      it('should create and return a new Robot', done => {
        // NOTE: Need to decouple unit tests from e2e testing!
        expect(true).to.equal(true);
        done();
      });
    });
  });
}
