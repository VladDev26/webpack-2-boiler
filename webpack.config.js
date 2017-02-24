const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const production = new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify('production') }
});


module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
	path: path.join(__dirname, "assets"),
	filename: 'bundle.js',
	publicPath: '/assets/'
  },
  
  module: {
	rules: [
	  // { 
	  //   test: /\.js$/, 
	  //   exclude: /(node_modules)/,
	  //   loader: 'babel-loader',
	  //   options: { presets: ['es2015', 'react', 'stage-2'] }
	  // },
	  

	  {
        test: /\.scss/,
        use: ExtractTextPlugin.extract([
        	'css-loader',
        	'sass-loader',
        	{
	            loader: 'postcss-loader',
	            options: {
	              plugins: function () {
	                return [
	                  require('autoprefixer')
	                ];
	              }
	            }
	        }
        ])
      }
	  // {
   //      test: /\.css/,
   //      use: [
   //        'css-loader',
   //        {
   //          loader: 'postcss-loader',
   //          options: {
   //            plugins: function () {
   //              return [
   //                require('autoprefixer')
   //              ];
   //            }
   //          }
   //        }
   //      ]
   //    }

	  // { 
	  //   test: /.*\.(ttf|eot|woff2?|svg)(\?.*$|$)/i,
	  //   loader: "file-loader?name=fonts/[name]/[name].[ext]"
	  // },
	  // { 
	  //   test: /\.html$/i,
	  //   loader: "html-loader"
	  // },

	  // { 
	  //   test: /.*\.(gif|png|jpg)$/i, 
	  //   loader: "file-loader?name=img/[name].[ext]"
	  // }
	],
  },
  plugins: [
	new ExtractTextPlugin('styles/bundle.css')
  ]
};
