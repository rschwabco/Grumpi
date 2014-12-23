var gulp = require('gulp')
	, nodemon = require('gulp-nodemon')
	, jshint = require('gulp-jshint')

gulp.task('lint', function () {
	gulp.src('../../application/**/*.js')
		.pipe(jshint())
})

gulp.task('node-watch', function () {
	nodemon({ script: 'server.js', ext: '*.js *.jsx', ignore: ['node_modules/**', 'gulp/**', 'public/**'] })
		.on('change', ['lint', 'build'])
		.on('restart', function () {
			console.log('restarted!')
		})
})