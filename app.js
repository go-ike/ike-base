// Better require path
require('app-module-path').addPath(__dirname + '/app/controllers');
require('app-module-path').addPath(__dirname + '/app/models');
require('app-module-path').addPath(__dirname + '/app/helpers');

const environment = process.env.NODE_ENV;

if (environment === 'production')
	require('./config/environments/production.js');

else if (environment === 'test')
	require('./config/environments/test.js');

else
	require('./config/environments/development.js');
