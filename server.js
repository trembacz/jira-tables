var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
	contentBase: path.join(__dirname, "dist"),
	compress: true,
	hot: true,
	inline: true,
	historyApiFallback: true,
	quiet: false,
    noInfo: true,
    open: true,
    stats: {
		assets: false,
		colors: true,
		chunks: false,
		chunkModules: false,
		hash: false,
		maxModules: 0,
		timings: false,
		version: false
    }
}).listen(3000, 'localhost', function (err) {
    if (err) { console.log(err); }
    console.log('Listening at localhost:3000');
});
