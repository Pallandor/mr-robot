'use strict';

const mongoose = require('mongoose');

const robotSchema = new mongoose.Schema({
  master: { type: String, required: true },
  x: Number,
  y: Number,
  direction: String,
  onTable: { type: Boolean, default: false },
}, { timestamps: true });

// /** middleware **/
// tableSchema.pre('save', function (next) {
//   const user = this;
//   // ...
// });
//
// /** Helper methods **/
// tableSchema.methods.someMethod = function (value, cb) {
//   // ...
// };

const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;
