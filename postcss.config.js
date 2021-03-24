const stylelint = require('stylelint');
const stylelintConfig = require('./stylelint.config');
const env = process.env.NODE_ENV || 'development';

const path = require('path');

module.exports = {
  env,
  map: {
    inline: false
  },
  plugins: [
    require('postcss-import')({
      plugins: [
        stylelint({
          config: stylelintConfig,
          ignoreFiles: [
            path.join(__dirname, 'node_modules/**/*.css'),
            path.join(__dirname, 'dist'),
          ],
        })
      ]
    }),
    require('postcss-preset-env')({
      stage: 2, // default stage is 2
      preserve: false,
      autoprefixer: {
        grid: true
      },
      features: {
        'color-mod-function': { unresolved: 'warn' },
        'custom-media-queries': {}
      },
      browsers: ['>= 5% in DK', 'ie 11']
    }),
    require('postcss-color-function'),
    require('postcss-hexrgba'),
    require('postcss-calc'),
    require('postcss-nested'),
    require('cssnano')({
      autoprefixer: false,
      discardComments: {
        removeAll: true
      },
      mergeLonghand: true,
      colormin: false,
      zindex: false,
      discardUnused: {
        fontFace: false
      }
    }),
    require('postcss-reporter')({
      clearMessages: true,
      throwError: false
    })
  ]
};
