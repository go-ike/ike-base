// Better require path
require('app-module-path').addPath(__dirname + '/app/controllers');
require('app-module-path').addPath(__dirname + '/app/models');
require('app-module-path').addPath(__dirname + '/app/helpers');

// App setup
const express = require('express');
const app = express();

// Nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('./app/views/', { autoescape: true, express: app });
app.set('view engine', 'html');

// Routes
const routes = require('./config/routes.js');
app.use('/', routes);

// Database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sample');

// Public files
app.use(express.static('public'));


app.listen(3000, () => { console.log('Express up!'); });
