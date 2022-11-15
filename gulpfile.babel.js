const { series,watch,dest,src } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const livereload = require('gulp-livereload');
const uglify = require('gulp-uglify');

const babel = require('gulp-babel');

function javascript() {
    return src('src/scripts/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('dist/scripts/'))
}

function css() {
    return src('./src/styles/*.scss')
        .pipe(sass.sync().on('error',sass.logError))
        .pipe(
            dest('./dist/styles/'),
        );
};

function copyHtml() {
    return src('src/index.html')
        .pipe(
            dest('dist/'),
        );
}

function copyAssets() {
    return src(['src/assets/**/*'])
        .pipe(
            dest('dist/assets'),
            livereload()
        );
}

const tasks = series(css,javascript,copyHtml,copyAssets)

exports.watch = function () {
    watch(
        [
            'src/styles/*.scss',
            'src/scripts/*.js',
            'src/assets/**/*',
            'src/index.html'
        ],
        tasks
    )
}
exports.default = tasks