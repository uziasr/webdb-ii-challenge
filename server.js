const express = require('express');

const db = require('./data/dbConfig');

const dealerRouter = require('./dealerRouter/dealerRouter')

const server = express();

server.use(express.json());

server.use('/api/cars', dealerRouter)

module.exports = server;