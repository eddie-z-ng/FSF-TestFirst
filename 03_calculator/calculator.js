function Calculator () {
	this.num = 0;
	this.value = function () {
		return this.num;
	}

	this.add = function(param) {
		this.num += param;
	}

	this.subtract = function (param) {
		this.num -= param;
	}
}