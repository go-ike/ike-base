
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
	tile: String,
	date: Date
});

module.exports = mongoose.model('Sample', SampleSchema);
