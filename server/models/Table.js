'use strict';

const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  dimension: {type: Number, default: 5}, // TODO: Replace dimension default with dbconfig input
  robots: {type: Array, default: []}, //arr of robot ids only  // TODO: Does it need default empty array value? test this!
  robotLimit: {type: Number, default: 4}, // TODO: Replace with dbconfig val input
  currentUsersTurn: { type: String, required: true},
}, { timestamps: true });

// /** middleware **/
// tableSchema.pre('save', function (next) {
//   const table = this;
//
// });
//
// /** Helper methods **/
// tableSchema.methods.someMethod = function (value, cb) {
//   // ...
// };

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
