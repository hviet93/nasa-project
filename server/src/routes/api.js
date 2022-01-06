const epxress = require('express');

const planetRouter = require('./planets/plantes.router');
const launchesRouter = require('./launches/launches.router');

const api = epxress.Router();

api.use('/planets', planetRouter);
api.use('/launches', launchesRouter);

module.exports = api;