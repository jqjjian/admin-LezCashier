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
      ReactDOM: 'react-dom',
      cn: 'classnames'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel?stage=0'],
        // exclude: /node_modules/,
        // include: __dirname
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap&-restructuring!autoprefixer'),
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ['style','css?sourceMap','autoprefixer','sass'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loaders: ['style','css?sourceMap','autoprefixer'],
        // exclude: /node_modules/,
        // include: __dirname
      },
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/octet-stream'},
      {test: /\.(eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=image/svg+xml'},
      {test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i, loader: 'url?limit=10000'},
      //{test: path.resolve('jquery/dist/jquery.min.js'), loader: 'expose?jQuery'}//暴露到全局
    ]
  },
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
