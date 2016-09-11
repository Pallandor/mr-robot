'use strict';

const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  dimension: {type: Number, default: 5}, // TODO: Replace default with dbconfig val
  robots: {type: Array, default: []},
  robotLimit: {type: Number, default: 4}, // TODO: Replace default with dbconfig val
  currentUsersTurn: { type: String, required: true},
}, { timestamps: true });

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
