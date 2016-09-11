'use strict';

/** In-memory store **/
const user = {
  username: null,
  tableId: null,
  commandHistory: [],
  initiallyPrompted: false,
};

// NOTE: API can return literals, but should not return object refs e.g. arrays

/** Game state selectors **/
exports.getUsername = () => user.username;
exports.getTableId = () => user.tableId;
exports.getLatestCommand = () => user.commandHitory[user.commandHitory.length-1];

exports.addTableId = tableId => {user.tableId = tableId;};
exports.addUsername = username => {user.username = username;};
exports.addCommand = command => {user.commandHistory.push(command);};
