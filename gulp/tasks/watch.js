var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	gulp.watch('*.less', ['styles']);
	gulp.watch('*.jsx', ['browserify']);
	// Note: The browserify task handles js recompiling with watchify
});
