const express = require('express');
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');

//adding a function getServer to avoid code from executing under no command

function getServer() {
	const server = express();

	//declare middlewares first
	server.use(morgan('dev'));
	server.use(express.json());
	server.use(cors());

	//declare router
	server.use(router);

	return server;
}

module.exports = getServer;
