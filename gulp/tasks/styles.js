const gulp = require('gulp');
const cssnano = require('cssnano');
const colorFunction = require('postcss-color-function');
const del = require('del');
const hexRgba = require('postcss-hexrgba');
const nested = require('postcss-nested');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const postcssCalc = require('postcss-calc');
const postcssImport = require('postcss-partial-import');
const postcssPresetEnv = require('postcss-preset-env');
const sourcemaps = require('gulp-sourcemaps');
const stylelint = require('stylelint');
const rename = require('gulp-rename');
const reporter = require('postcss-reporter');

const plugins = [
  postcssImport({
    plugins: [stylelint()],
  }),
  nested,
  postcssPresetEnv({
    autoprefixer: { grid: true },
    browsers: 'last 4 versions',
    stage: 1,
    preserve: false,
  }),
  colorFunction,
  hexRgba,
  postcssCalc,
  cssnano({
    autoprefixer: false,
    discardComments: {
      removeAll: true,
    },
    mergeLonghand: true,
    colormin: false,
    zindex: false,
    discardUnused: {
      fontFace: false,
    },
  }),
  reporter({
    clearMessages: true,
    throwError: true,
  }),
];

const clean = cb => {
  del(['dist/stylesheets/*.css']);

  cb();
};

const process = () =>
  gulp
    .src('styleguide/stylesheet.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(rename('stylesheet.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/stylesheets'));

const build = gulp.series(clean, process);
const watch = cb => {
  gulp.watch('styleguide/**/*.css', gulp.series(clean, process));

  cb();
};

exports.build = build;
exports.watch = watch;
