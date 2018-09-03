module.exports = {
	resolveLoader: {
		moduleExtensions: ['-loader']
	},
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	mode: "none",
	output: {
		path: __dirname + "/app/temp/scripts",
		filename: "[name].js"
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






/* 

Instead loaders: [
It's -> rules: [
________________________________
ERROR in ./app/assets/scripts/App.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/core'

 npm i @babel/core 
 _______________________________

 ERROR in Entry module not found: Error: Can't resolve 'babel' in 'C:\Users\MarijanaSevo\Desktop\Projects\adventure-agency'
BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.
                 You need to specify 'babel-loader' instead of 'babel',

module.exports = {
	resolveLoader: {
		moduleExtensions: ['-loader']
	},
	
*/
