/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var buildBundle = require('../util/bundleBuilder');
var gulp        = require('gulp');


gulp.task('browserify', function() {
	var bundleConfig = {
		// Specify the entry point of your app
		entries: ['./application/application-root.js'],
		// Add file extentions to make optional in your requires
		extensions: [],
		alias: [
			__dirname  + '/application/components:components'
		],
		// Enable source maps!
		debug: true
	};

	return buildBundle(bundleConfig, 'application.js', 'public/dist/');

});
