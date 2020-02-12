const fractal = require('../../fractal');

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

const serve = () => {
  const server = fractal.web.server();

  server.on('error', err => logger.error(err.message));

  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
};

const build = () => {
  const builder = fractal.web.builder();

  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));

  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
};

exports.build = build;
exports.serve = serve;
