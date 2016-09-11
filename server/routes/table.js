'use strict';

const robotController = require('../controllers/robot');
const tableController = require('../controllers/table');

exports.postUsername = (req, res, next) => {
  return tableController.getTableByUsername(req.body.username)
      .then(selectedTable => res.status(200).json({
          tableId: selectedTable.id,
          username: req.body.username,
        }))
      .catch(err => {
        // TODO: rethink error handling (middleware?);
        console.error(err);
        res.sendStatus(500);
      });
};
