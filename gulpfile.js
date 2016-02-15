var gulp = require('gulp'),
	util = require('gulp-util'),	
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	minifyjs = require('gulp-minify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	sassFiles = "assets/scripts/scss/*.scss",
	jsFiles = "assets/scripts/js/*.js",
	log = util.log;

gulp.task('default', ['sass', 'compress', 'images', 'watch'], function() {
});

gulp.task("sass", function(){
	log("Generate CSS files " + (new Date()).toString());
	gulp.src(sassFiles)
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer({ browsers: ["last 3 versions"]
		}))				
		.pipe(minifycss())
		.pipe(rename('main.css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css'));
});

gulp.task("compress", function(){
	log("Generate JS files " + (new Date()).toString());
	gulp.src('assets/scripts/js/*.js')
	.pipe(minifyjs())
	.pipe(rename('main.js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/js/'));
});

gulp.task("images", function(){
	gulp.src('assets/images/*.png')
	.pipe(imagemin({ progressive: true }))
	.pipe(gulp.dest('dist/images/'));
})

gulp.task("watch", function(){
	log("Watching scss files for modifications");
	log("Watching js files for modifications");
	gulp.watch(sassFiles, ["sass"]);
	gulp.watch(jsFiles, ["compress"]);
});
