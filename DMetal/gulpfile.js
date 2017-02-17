'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    rename = require('gulp-rename'), 
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    angularProtractor = require('gulp-angular-protractor'),
    karma = require('karma'),
    reload = browserSync.reload;
    
    
 var path = {
    build: { //path to files after building
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/assets/img/',
        fonts: 'build/assets/fonts/'
    },
    src: { //path for the source files
        html: 'app_src/*.html', //src/*.html - all files with .html extension
        js: 'app_src/script.js',//only main files
        style: 'app_src/less/main.less',
        img: 'app_src/assets/img/*.*', //img/**/*.*  files of all extensions from the folders
        fonts: 'app_src/assets/fonts/**/*.*'
    },
    watch: { //what files we want to watch
        html: 'app_src/sources/**/**/*.html',
        js: 'app_src/sources/**/**/*.js',
        style: 'app_src/less/**/*.less',
        img: 'app_src/assets/img/**/*.*',
        fonts: 'app_src/assets/fonts/**/*.*'
    },
    clean: './build'
};   
    
    
 var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 8384,
    logPrefix: "Frontend_Dev"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html) //select files from the path defined
        .pipe(rigger()) 
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true})); //reload on our server for updates
});
    
    
gulp.task('js:build', function () {
    gulp.src(path.src.js) // main file
        .pipe(rigger()) 
        .pipe(sourcemaps.init()) //initializing sourcemap
        .pipe(uglify()) //compress  js
        .pipe(sourcemaps.write()) //write sourcemaps
        .pipe(gulp.dest(path.build.js)) 
        .pipe(reload({stream: true})); //server reload
});  
   
  gulp.task('style:build', function () {
    gulp.src(path.src.style) //main.less
        .pipe(sourcemaps.init()) 
        .pipe(less()) //compiling
        .pipe(prefixer()) //adding vendor prefixes
        .pipe(cssmin()) //minimize
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(path.build.css)) 
        .pipe(reload({stream: true}));
});
   
   gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        .pipe(imagemin({ //minimize images
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) 
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);
    
    
 gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
  watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});   
    
   gulp.task('protractor', function(cb) {
    gulp
        .src(['test.js'])
        .pipe(angularProtractor({
            'configFile': 'protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', cb);
});
  
  gulp.task('karma', function (done) {
    var Server = new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function (exitCode) {
        done();
        process.exit(exitCode);
    }).start();
}); 
  
   gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'protractor', 'karma', 'webserver', 'watch']);
    
 