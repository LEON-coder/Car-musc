const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');
const { stream } = require("browser-sync");
const browserSync = require('browser-sync').create();
const imagemin = require("gulp-imagemin");
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');

function clean() {
return del(pattern, './');
}



function compilePug(cb) {
    src("./src/pug/pages/*.pug")
    .pipe(pug({
            pretty:true
        }))
    .pipe(dest('./app'));
    cb();
}



function CSScompiling() {
    return gulp.src("./src/scss/**/*.scss")
    .pipe(plumber())  
     .pipe(cleanCSS())
    .pipe(sourcemaps.init())
    .pipe(sass({pretty: true}).on("error", sass.logError))
     .pipe(autoprefixer())
    .pipe(browserSync.stream())
    .pipe(plumber.stop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/css'));
}


 function script() {
    return gulp.src("src/js/**/*.js")  
      .pipe(babel({
        presets: ['@babel/env']
    })) 
    .pipe(uglify())
    .pipe(browserSync.stream())
    .pipe(gulp.dest('./app/js'));
} 


function liveserver() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
}



 function svgSpriteBuild() {
	return gulp.src("src/img/sprites/")
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
			.pipe(replace('&gt;', '>'))
			.pipe(gulp.dest('./img/sprites/'));
}



function watcher() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch('src/pug/**/*.pug', pugToHtml);
    gulp.watch('src/js/main.js', script);
    gulp.watch('src/scss/**/*scss', CSScompiling);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('src/images/**/*.{jpg,png,gif,svg}', imageCompressing);
    gulp.watch('src/js', script);
  }


function imageCompressing() {
    return gulp.src([
        "src/img/**/*.{jpg,png,gif,svg}", 
        "!src/img/sprites/**/*"])
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [ 
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('./app/img'));
}

exports.pug = compilePug;
exports.default = gulp.parallel(compilePug, CSScompiling, script, watcher, imageCompressing, svgSpriteBuild);