// run in shell
// NODE_ENV=production webpack -p --config webpack.config.js

const webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  entry: [
    './app/core.js'
  ],

  output: {
    path: './webpack-bundle',
    filename: 'wp-bundle.js'
  },

  devServer: {
    inline: true,
    port: 3000
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      // sourceMap: false,
      mangle: true,
      minimize: true
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
