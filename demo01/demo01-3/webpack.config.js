module.exports = {
	entry: __dirname + '/src/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
}