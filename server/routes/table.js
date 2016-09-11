'use strict';

const tableController = require('../controllers/table');

// NOTE: Use of next()
exports.postUsername = (req, res) => {
  return tableController.getTableByUsername(req.body.username)
      .then(selectedTable => res.status(200).json({
        tableId: selectedTable.id,
        username: req.body.username,
      }))
      .catch(err => {
        // TODO: Rethink error handling
        console.error(err);
        res.sendStatus(500);
      });
};
