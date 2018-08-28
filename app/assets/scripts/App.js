var $ = require("jquery");
var Person = require('./modules/Person');


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();




















/* 
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
