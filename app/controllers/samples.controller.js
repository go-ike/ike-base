
const Sample = require('sample.model');

class SamplesController {
	constructor() {}

	index(req, res) {
		let data = {};
		data.sample = "Hello from controller";

		res.render('sample/index', data);
	}
}

module.exports = SamplesController;
