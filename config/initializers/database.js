function bootDatabase(config) {
	const mongoose = require('mongoose');
	mongoose.connect(config.uri + config.name);
}

module.exports = bootDatabase;
