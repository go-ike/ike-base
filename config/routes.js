
const express = require('express');
const r       = express.Router();

// Samples
let SamplesController = new (require('samples.controller'))();
r.get('/samples', SamplesController.index);

module.exports = r;
