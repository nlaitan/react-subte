var express = require('express');
var api = express.Router();
var LineController = require('./lineStatus');


api.get('/subtes/:id', LineController.getSubwayState);


module.exports = api;