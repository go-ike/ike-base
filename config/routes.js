/**
 * ROUTES
 * All app routes live in here. Ike will automatically
 * add new routes to the end of this file.
 */
const express = require('express');
const r       = express.Router();

// Samples
let SamplesController = new (require('samples.controller'))();
r.get('/samples', SamplesController.index);

module.exports = r;
