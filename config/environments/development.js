/**
 * ENVIRONMENTS/DEVELOPMENT
 * Will boot when NODE_ENV is "development" or is not defined.
 */

// Config files
const yamler = require('yamler');
const applicationConfig = yamler('config/application.yml').development;
const databaseConfig = yamler('config/database.yml').development;

// Boot express
require('./../initializers/express.js')(applicationConfig);

// Start the server
require('./../initializers/database.js')(databaseConfig);
