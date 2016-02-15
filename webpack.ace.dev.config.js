var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/ace'
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
  
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel?stage=0'],
        // exclude: /node_modules/,
        // include: __dirname
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('css?sourceMap&-restructuring!autoprefixer'),
      //   exclude: /node_modules/,
      //   include: __dirname
      // },
      {
        test: /\.scss$/,
        loaders: ['style','css?sourceMap','autoprefixer','sass'],
        exclude: /node_modules/,
        include: __dirname
      },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader'),
      //   exclude: /node_modules/,
      //   include: __dirname
      // },
      {
        test: /\.css$/,
        loaders: ['style','css?sourceMap','autoprefixer'],
        // exclude: /node_modules/,
        // include: __dirname
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&name=font/[hash].[ext]&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&name=font/[hash].[ext]&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&name=font/[hash].[ext]&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?&name=font/[hash].[ext]"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&name=font/[hash].[ext]&mimetype=image/svg+xml"
      },
      {test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i, loader: 'url?limit=10000'},
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),//热替换模块(非webpack-dev模式)
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('[name].css', {
    //   disable: false,
    //   allChunks: true
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery:'jquery',
      React: 'react',
      ReactDOM: 'react-dom',
      cn: 'classnames'
    })
  ],
  // externals: {
  //   "jquery": 'window.jQuery',
  //   "jquery": 'window.$',
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
