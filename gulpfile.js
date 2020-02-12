const gulp = require('gulp');

const styles = require('./gulp/tasks/styles');
const fractal = require('./gulp/tasks/fractal');

const { build } = styles;
const watch = gulp.series(styles.build, styles.watch, fractal.serve);

exports.build = build;
exports.production = gulp.series(styles.build, fractal.build);
exports.watch = watch;
