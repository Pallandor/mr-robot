'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const robotSchema = new mongoose.Schema({
  master: { type: String, required: true, unique: true },
  x: Number,
  y: Number,
  direction: String,
  onTable: { type: Boolean, default: false },
}, { timestamps: true });

robotSchema.plugin(uniqueValidator);
const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;
