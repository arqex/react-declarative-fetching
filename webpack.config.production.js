'use strict';
var Path = require('path'),
	webpack = require('webpack'),
	config = require('./webpack.config')
;

// Remove hot loader
config.entry = [ './src/app.js' ];
config.output.publicPath = '/assets/';
config.module.loaders[0] = { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM', exclude: /node_modules/ }
config.plugins = [
	new webpack.NoErrorsPlugin()
];

module.exports = config;
