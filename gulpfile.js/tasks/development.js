const gulp       = require('gulp');
const watch      = require('gulp-watch');
const batch      = require('gulp-batch');

let developmentTask = function() {
	watch(['./app/views/**/*.css', './app/assets/styles'], 
		batch((events, done) => {
			gulp.start('css', done);
		})
	);
}

gulp.task('development', developmentTask);
module.exports = developmentTask;