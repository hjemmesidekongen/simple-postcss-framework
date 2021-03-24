const fractal = require('@frctl/fractal').create();
const path = require('path');

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Simple PostCSS framework');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('default.preview', '@preview');
fractal.components.set('path', path.join(__dirname, 'src'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'documentation'));

fractal.web.set('builder.dest', path.join(__dirname, 'build'));
fractal.web.set('static.path', path.join(__dirname, 'dist'));
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
  open: true,
  files: [
    path.join(__dirname, 'dist'),
    path.join(__dirname, 'src/**/*[.hbs, .json]'),
  ],
});
fractal.web.set('server.watch', true);

module.exports = fractal;
