const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  userName: String,
  lat: Number,
  long: Number,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
