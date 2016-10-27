function bootExpress(config) {
	// App setup
	const express = require('express');
	const app     = express();

	// Nunjucks
	const nunjucks = require('nunjucks');
	nunjucks.configure('./app/views/', { autoescape: true, express: app });
	app.set('view engine', 'html');

	// Routes
	const routes = require('./../../config/routes.js');
	app.use('/', routes);

	// Public files
	app.use(express.static('public'));

	app.listen(config.port, () => { console.log('Express is up.'); });
}

module.exports = bootExpress;
