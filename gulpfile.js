var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var runSeq = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

var path = {
    HTML: 'src/views/index.html',
    MINIFIED_OUT: 'build.min.js',
    OUT: 'build.js',
    DEST: 'dist',
    DEST_VIEWS: 'dist/views',
    DEST_BUILD: 'dist/build',
    DEST_SRC: 'dist/src',
    ENTRY_POINT: './src/js/App.js',
    FONTS: './src/fonts',
    FONT_DEST: './dist/fonts',
    IMAGES: './src/images',
    IMAGES_DEST: './dist/images'
};

function startBundle() {
    return (
            browserify({
            entries: [path.ENTRY_POINT],
            transform: [babelify, reactify]
            })
            .bundle()
        )
}




