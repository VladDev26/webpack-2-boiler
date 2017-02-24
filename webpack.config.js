var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var production = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
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
      { 
        test: /\.js$/, 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react', 'stage-2'] }
      },
      
      { 
        test: /\.scss$/i, 
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },

      { 
        test: /.*\.(ttf|eot|woff2?|svg)(\?.*$|$)/i,
        loader: "file-loader?name=fonts/[name]/[name].[ext]"
      },
      { 
        test: /\.html$/i,
        loader: "html-loader"
      },

      { 
        test: /.*\.(gif|png|jpg)$/i, 
        loader: "file-loader?name=img/[name].[ext]"
      }
    ],
  },
  plugins: [
    // production,
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('styles/bundle.min.css')
  ]
};
