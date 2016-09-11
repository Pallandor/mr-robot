'use strict';

const tableController = require('../controllers/table');

// TODO: determine whether use next();
exports.postUsername = (req, res) => {
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
