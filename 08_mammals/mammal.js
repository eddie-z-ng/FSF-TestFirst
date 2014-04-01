function Mammal (nomen) {
	this.name = nomen;
	this.offspring = [];
}

Mammal.prototype = {
	sayHello: function () {
		return "My name is " + this.name + ", I'm a Mammal";
	},

	haveBaby: function() {
		var baby = new Mammal("Baby " + this.name);
		this.offspring.push(baby);
		return baby;
	}
};

function Cat(nomen, color) {
	Mammal.call(this, nomen);
	this.color = color;
}

// inherit from Mammal prototype
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.haveBaby = function (color) {
		var baby = new Cat("Baby " + this.name, color);
		this.offspring.push(baby);
		return baby;
	};
