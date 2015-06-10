'use strict';
var Path = require('path'),
	webpack = require('webpack'),
	autoprefixer = require('autoprefixer-core')
;

var paths = {
	src: Path.join( __dirname, 'src' )
}

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/app.js'
	],
	output: {
		path: Path.join( __dirname, 'assets' ),
		publicPath: 'http://localhost:8080/assets/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.jsx$/, loaders: ['react-hot', 'jsx-loader?insertPragma=React.DOM'], exclude: /node_modules/ },
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.scss$/, loader: "style!css!postcss-loader!sass" }
		]
	},
	postcss: [ autoprefixer ],
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss'],
		alias: {
			src: paths.src,
			assets: Path.join( __dirname, 'assets' )
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devtool: '#eval'
};
