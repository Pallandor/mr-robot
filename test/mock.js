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

// NOTE: Consider using lodash/merge instead of Object.assign
exports.getUserUsername = ind => user[ind].username;
exports.updateUser = (ind, dataObj) => Object.assign({}, user[ind], dataObj);
