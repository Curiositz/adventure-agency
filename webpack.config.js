module.exports = {
	resolveLoader: {
		moduleExtensions: ['-loader']
	},
	entry: "./app/assets/scripts/App.js",
	output: {
		path: __dirname + "/app/temp/scripts",
		filename: "App.js"
	},
	module: {
		rules: [
			{
				loader: 'babel',
				query: {
					presets: ["@babel/preset-env"]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}