function Calculator () {
	this.tokens = [];
	this.push = this.tokens.push.bind(this.tokens);

	this.plus = function () {
		if (this.tokens.length < 2) {
			throw "calculator is empty";
			return;
		}
		var op2 = this.tokens.pop();
		var op1 = this.tokens.pop();
		var temp = op1 + op2;
		this.push(temp);
	};

	this.minus = function () {
		if (this.tokens.length < 2) {
			throw "calculator is empty";
			return;
		}
		var op2 = this.tokens.pop();
		var op1 = this.tokens.pop();
		var temp = op1 - op2;
		this.push(temp);
	};

	this.divide = function () {
		if (this.tokens.length < 2) {
			throw "calculator is empty";
			return;
		}
		var op2 = this.tokens.pop();
		var op1 = this.tokens.pop();
		var temp = op1 / op2;
		this.push(temp);
	};

	this.times = function () {
		if (this.tokens.length < 2) {
			throw "calculator is empty";
			return;
		}
		var op2 = this.tokens.pop();
		var op1 = this.tokens.pop();
		var temp = op1 * op2;
		this.push(temp);
	};

	this.value = function () {
		return this.tokens[this.tokens.length-1];
	};

}