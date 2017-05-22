'use strict';

var gulp = require('gulp'),
        watch = require('gulp-watch'),
        sass = require('gulp-sass'),
        smartgrid = require('smart-grid'),
        mmq = require('gulp-merge-media-queries'),
        jade = require('gulp-jade'),
        autoprefixer = require('gulp-autoprefixer'),
        sourcemaps = require('gulp-sourcemaps'),
        concat = require('gulp-concat'),
        browserSync = require('browser-sync'),
        plumber = require('gulp-plumber'),
        notify  = require('gulp-notify'),
        reload = browserSync.reload;

// Jade
gulp.task('jade', function() {
  return gulp.src('frontend/jade/*.jade')
                .pipe(plumber({
                  errorHandler: notify.onError(function(err) {
                    return {
                      title: 'Jade Error',
                      message: err.message
                    };
                  })
                }))
                .pipe(jade({pretty: true}))
                .pipe(gulp.dest('dist/'))
                .pipe(notify('Done'))
});

// Sass
gulp.task('sass', function() {
  return gulp.src('frontend/scss/style.scss')
                .pipe(plumber({
                  errorHandler: notify.onError(function(err) {
                    return {
                      title: 'Scss Error',
                      message: err.message                      
                    };
                  })
                }))
                .pipe(sass({ noCache: true }))
                .pipe(autoprefixer({
                          browsers: ['last 5 versions'],
                          cascade: false
                }))
                .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
                .pipe(gulp.dest('dist/css'))
                .pipe(sourcemaps.write('sourcemaps'))
                .pipe(reload({stream: true}))
                .pipe(notify('Done'))
});

// var settings = {
//     outputStyle: 'scss',
//     columns: 12,
//     offset: "30px",
//     container: {
//         maxWidth: '1200px',
//         fields: '15px'
//     },
//     breakPoints: {
//         lg: {
//             'width': '1100px',
//             'fields': '15px'
//         },
//         md: {
//             'width': '960px',
//             'fields': '15px'
//         },
//         sm: {
//             'width': '780px',
//             'fields': '15px'
//         },
//         xs: {
//             'width': '560px',
//             'fields': '15px'
//         }
//     }
// };

// smartgrid('frontend/scss/common', settings);


gulp.task('mmq', function () {
  return gulp.src('dist/css/style.css')
    .pipe(mmq({
      log: true
    }))
    .pipe(gulp.dest('dist/css'));
});

// JS
gulp.task('js', function () {
  return gulp.src('frontend/js/**/*.js')
                .pipe(plumber({
                  errorHandler: notify.onError(function (err) {
                    return {
                      title: 'JS Error',
                      message: err.message
                    };
                  })
                }))
                .pipe(gulp.dest('dist/js'))
                .pipe(reload({stream: true}))
                .pipe(notify('Done'))
});

// Watch
gulp.task('watch', function() {
  gulp.watch('frontend/scss/**/**/*.scss', ['sass']);
  gulp.watch('frontend/jade/**/*.jade', ['jade']);
  gulp.watch('frontend/js/**/*.js', ['js']);
  gulp.watch('frontend/img/*', ['imgminify']);
  gulp.watch('frontend/fonts/**/*.{eot,ttf,woff,otf,woff2}', ['fonts']);
});

// Server 
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: "dist",
    },
    port: 3222,
    notify: false
  });

  browserSync.watch('dist/*').on('change', browserSync.reload);
});

gulp.task('default', ['browserSync',  'jade', 'sass', 'js', 'watch']);