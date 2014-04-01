function f2c (degrees) {
	return (degrees - 32) * 5/9;
}

function c2f (degrees) {
	return (degrees * 9/5) + 32;
}

function Temperature (deg) {
	var temp = { degrees: deg || 0, unit: "F"};

	this.setFahrenheit = function (fdegrees) {
		temp.degrees = fdegrees;
		temp.unit = "F";
	}

	this.setCelcius = function (cdegrees) {
		temp.degrees = cdegrees;
		temp.unit = "C";
	}

	this.fahrenheit = function() {
		if (temp.unit === "C") {
			this.setFahrenheit(c2f(temp.degrees));
		} 
		return temp.degrees;
	}

	this.celcius = function () {
		if (temp.unit === "F") {
			this.setCelcius(f2c(temp.degrees));
		}
		return temp.degrees;
	}
}