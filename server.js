'use strict';

var config = require('./config/application.config'),
		Hapi = require('hapi'),
		rethink = require('rethinkdb'),
	  Alias = require('require-alias'),
	  Path = require('path');


global.alias = new Alias({
	aliases: {
		'@root': './',
		'@components': './application/components'
	}
});

// Initialize Rethink
rethink.connect(function (err, db) {
	if (err) { throw err; }

	// Initialize Hapi
	var server = new Hapi.Server({
			connections: {
				routes: {
					files: {
						relativeTo: Path.join(__dirname, 'public')
					}
				}
			}
		}),

		env = process.env.NODE_ENV || 'dev';

	// Start the server by listening on <port>
	server.connection({ port: config[env].port });

	// Define template engine
	server.views({
		engines: {
			html: require('swig'),
			jsx: require('hapi-react-views')
		},
		relativeTo: './',
		path: ['./application/modules', './application/']
	});

	//Register Controllers
	var controllers = [
		{ register: require('./application/core/server/controllers/core.controller.server.js') }
	];


	//Register plugins, and start the server if none of them fail
	server.register(controllers, function (err) {


		if (err) { throw err; }
		server.start(function (err) {

			console.log('info', 'Server running at: ' + server.info.uri);

		});
	});

});