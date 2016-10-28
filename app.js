/**
 * APP.JS - Main entry file
 * The app starts here. The current NODE_ENV will be booted.
 */

/**
 * Improve the require path. Controllers, models and helpers can
 * be required direclty, without the need of traversing the
 * relative path.
 *
 * This will work, anywhere on the app.
 * const controller = require('samples.controller');
 */
require('app-module-path').addPath(__dirname + '/app/controllers');
require('app-module-path').addPath(__dirname + '/app/models');
require('app-module-path').addPath(__dirname + '/app/helpers');

/**
 * Boot the right environment based on NODE_ENV.
 */
const environment = process.env.NODE_ENV;

if (environment === 'production')
	require('./config/environments/production.js');

else if (environment === 'test')
	require('./config/environments/test.js');

else
	require('./config/environments/development.js');
