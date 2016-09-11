'use strict';

const user = [
  {username: 'roger'},
  {username: 'michelle'},
  {username: 'kyle'},
  {username: 'jonathan'},
  {username: 'kat'},
  {username: 'jenna'},
  {username: 'ali'},
  {username: 'lisa'},
  {username: 'nick'},
  {username: 'sam'},
  {username: 'rod'},
  {username: 'rachael'},
  {username: 'melissa'},
];

/** Expose simple API for mock data interaction **/
exports.getUsername = ind => user[ind].username;
exports.getTableId = ind => user[ind].table.id;
exports.updateUserTable = (ind, tableObj) => user[ind].table = tableObj;
exports.getTable = ind => user[ind].table;
exports.getUser = ind => user[ind];
