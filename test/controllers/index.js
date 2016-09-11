'use strict';

const util = require('../util');
const installTableControllerTests = require('./table');
const installRobotControllerTests = require('./Robot');

module.exports = () => {
  describe('MongoDB Controllers', () => {
    before(done => {
      util.connectDB()
        .then(util.clearDB())
        .then(() => done())
        .catch(err => done(err));
    });
    installTableControllerTests();
    installRobotControllerTests();
  });
};
