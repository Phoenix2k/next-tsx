const cypressWebpackPreprocessor = require('@cypress/webpack-preprocessor');
/**
 * Cypress webpack preprocessor
 *
 * @link https://github.com/cypress-io/cypress-webpack-preprocessor
 */
const webpackOptions = {
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  }
};

const options = {
  webpackOptions
};

module.exports = cypressWebpackPreprocessor(options);
