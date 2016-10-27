function bootDatabase(config) {
	const mongoose = require('mongoose');
	mongoose.connect(config.uri);
}

module.exports = bootDatabase;