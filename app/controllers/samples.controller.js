/**
 * SAMPLES
 * Controller description
 */

class SamplesController {
	index(req, res) {
		let data = {};

		res.render('sample/index', data);
	}
}

module.exports = SamplesController;
