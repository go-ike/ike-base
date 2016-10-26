const gulp    = require('gulp');
const concat  = require('gulp-concat');
const postcss = require('gulp-postcss');
const watch   = require('gulp-watch');
const batch   = require('gulp-batch');

/**
 * Builds all assets for production
 */
gulp.task('build', ['css']);

/**
 * Watcher for development purposes
 * - Watches css changes and rebuild it
 */
gulp.task('watch', ['css'], () => {
	watch('./app/views/**/*.css', batch((events, done) => {
		gulp.start('css', done);
	}));
});




/**
 * PRIVATE TASKS
 * ---------------------------------------------------------
 */

/**
 * Look at all css files unde views, build and concat 
 * them into public/application.css
 * 
 * The file at views/layout/application.css is the first one 
 * imported, the other have no specific order.
 *
 * The @import rule will look into node_modules/ and app/views/
 * when looking for the imports
 */
gulp.task('css', () => {
	const cssFiles = [
		// Primary CSS file, loaded before the others
		'./app/assets/styles/application.css', 

		// All styles under app/assets/styles
		'./app/assets/styles/**/*.css', 
		'!./app/assets/styles/**/_*.css', 

		// All styles under app/views
		'./app/views/**/*.css', 
		'!./app/views/**/_*.css'
	];

	const importPaths = [
		'./node_modules/',
		'./app/views/'
	];

	const importConfig = {
		path: importPaths
	}

	const postcssProcessors = [
		require('postcss-cssnext')(),
		require('postcss-import')(importConfig)
	];

	return gulp
		.src(cssFiles)
		.pipe(postcss(postcssProcessors))
		.pipe(concat('application.css'))
		.pipe(gulp.dest('./public'));
});
