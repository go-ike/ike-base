const gulp       = require('gulp');
const browserify = require('browserify');
const source     = require('vinyl-source-stream');

const options = {
	paths: [
		'./node_modules/'
	]
};

let browserifyTask = function() {
	return browserify('./app/assets/scripts/application.js', options)
		.bundle()
		.pipe(source('application.js'))
		.pipe(gulp.dest('./public'));
}

gulp.task('browserify', browserifyTask);
module.exports = browserifyTask;