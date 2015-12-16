var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    // alias: {
    //   'react': pathToReact
    // }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),//热替换模块(非webpack-dev模式)
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css', {
      disable: false,
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery:'jquery',
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel?stage=0'],
        exclude: /node_modules/,
        include: __dirname
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('css?sourceMap&-restructuring!autoprefixer'),
      //   exclude: /node_modules/,
      //   include: __dirname
      // },
      {
        test: /\.css$/,
        loaders: ['style','css?sourceMap','autoprefixer'],
        exclude: /node_modules/,
        include: __dirname
      },
    ]
  },
  // externals: {
  //   jquery: 'window.jQuery'
  // },
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
// var reduxSrc = path.join(__dirname, '..', '..', 'src')
// var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
// var fs = require('fs')
// if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
//   // Resolve Redux to source
//   module.exports.resolve = { alias: { 'redux': reduxSrc } }
//   // Compile Redux from source
//   module.exports.module.loaders.push({
//     test: /\.js$/,
//     loaders: ['babel'],
//     include: reduxSrc
//   })
// }
