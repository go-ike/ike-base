// Config files
const yamler = require('yamler');
const applicationConfig = yamler('config/application.yml').test;
const databaseConfig = yamler('config/database.yml').test;

// Boot express
require('./initializers/express.js')(applicationConfig);

// Start the server
require('./initializers/databse.js')(databaseConfig);
