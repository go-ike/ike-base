/**
 * Look at all css files under views and assets/styles, builds  
 * them into public/application.css
 * 
 * The file at views/layout/application.css is the first one 
 * imported, the other have no specific order.
 *
 * The @import rule will look into node_modules/ and app/views/
 * when looking for the imports
 */

const gulp    = require('gulp');
const concat  = require('gulp-concat');
const postcss = require('gulp-postcss');

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

// Defines where CSS import will look into
const importConfig = {
	path: [
		'./node_modules/',
		'./app/views/'
	]
}

const postcssProcessors = [
	require('postcss-cssnext')(),
	require('postcss-import')(importConfig)
];

let cssTask = function() {
	return gulp
		.src(cssFiles)
		.pipe(postcss(postcssProcessors))
		.pipe(concat('application.css'))
		.pipe(gulp.dest('./public'));
};

gulp.task('css', cssTask);
module.exports = cssTask;
