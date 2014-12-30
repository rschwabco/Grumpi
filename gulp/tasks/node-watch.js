var gulp = require('gulp')
	, nodemon = require('gulp-nodemon')
	, jshint = require('gulp-jshint')
	, livereload = require('gulp-livereload');

gulp.task('lint', function () {
	console.log('linting');
	gulp.src('../../application/**/*.js')
		.pipe(jshint())
		.pipe(livereload());
})



gulp.task('reload', function(){
	livereload();
	console.log('reloaded');
});

gulp.task('node-watch', function () {
	livereload.listen();
	nodemon({ script: 'server.js', ext: '*.js *.jsx *.html', ignore: ['node_modules/**', 'gulp/**', 'public/**'] })
		.on('change', ['lint', 'build', 'reload'])
		.on('restart', function () {
			console.log('restarted!');
		})
})