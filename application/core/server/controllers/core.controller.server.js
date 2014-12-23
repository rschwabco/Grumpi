exports.register = function(server, options, next) {
	server.route([
		{
			method: 'GET',
			path: '/',
			handler: function (request, reply) {
				reply.view('core/server/views/index.server.view.html');
			}
		},
		{
			method: 'GET',
			path: '/dist/{path*}',
			config: {
				handler: {
					directory: {

						path: './dist',
						listing: false,
						index: false
					}
				}
			}
		},

	]);

	// Callback, completes the registration process
	next();
}

exports.register.attributes = {
	name: 'app-core',
	version: '1.0.0'
};