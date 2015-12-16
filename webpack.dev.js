// var path = require('path');
// module.exports = {
//   entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
//   output: {
//       path: path.resolve(__dirname, 'build'),
//       filename: 'bundle.js',
//   }
// };
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
module.exports = {
  entry:'./src/js/main.js',
	  	// 'webpack-dev-server/client?http://localhost:8080',
	  	// 'webpack/hot/dev-server',
  	// editor:[
	  // 	'./build/app',
	  // 	'webpack/hot/only-dev-server'
  	// ]
  resolve: {
  	extensions: ['', '.js', '.jsx', 'css', 'scss'],
    // alias: {
    //   'react': pathToReact
    // }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
    filename: '[name].js'
  },
  module:{
  	loaders:[
	  	{
				test: /\.(js|jsx)$/,
				loader: 'babel?stage=0',
				include: path.join(__dirname, 'src/js/'),
				exclude:[path.join(__dirname, 'node_modules')]
			},
			{
        test: /\.css$/,
        loader: 'style!css',
        //include: path.join(__dirname, 'src/css/'),
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
        //loader: ExtractTextPlugin.extract('style','css!sass')
      },
		]
  },
  plugins: [
    // //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin("[name].css", {
    //     allChunks: true
    // }),
  ]
};