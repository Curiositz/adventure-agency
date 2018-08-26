function Person(fullName, favColor) {
	this.name = fullName,
	this.favColor = favColor,
	this.greet = function() {
		console.log('Hello! My name is ' + this.name + " and my favorite color is " + this.favColor + ".");
	}
}

module.exports = Person;