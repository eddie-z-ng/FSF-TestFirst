function countWords(sentence) {
	return sentence.split(" ").length
}

function makeAdder(base) {
	return function (num) {
		return base + num;
	}
}

function forEach(arr, action) {
	for (var i = 0; i < arr.length; i++) {
		action(arr[i]);
	}
}

function map(arr, action) {
	var result = [];
	forEach(arr, function(elem) {
		result.push(action(elem));
	});
	return result;
}

function filter(arr, pred) {
	var result = [];
	forEach(arr, function(elem) {
		if (pred(elem)) {
			result.push(elem);
		}
	});
	return result;
}

function contains(haystack, needle) {
	for (var key in haystack) {
		if (haystack[key] === needle) {
			return true;
		}
	}
	return false;
}

function reduce(arr, base, action) {
	var current = base;
	forEach(arr, function(elem) {
		current = action(current, elem);
	});
	return current;
}

var countWordsInReduce = function (curval, sentence) {
							return curval + countWords(sentence);
						};

function sum(arr) {
	return reduce(arr, 0, function(a, b) {
		return a + b;
	});
}

function every(arr, pred) {
	for (var i = 0; i < arr.length; i++) {
		if (!pred(arr[i])) {
			return false;
		}
	}
	return true;
}

function any(arr, pred) {
	pred = pred || function(elem) {return elem};
	for (var i = 0; i < arr.length; i++) {
		if (pred(arr[i])) {
			return true;
		}
	}
	return false;
}

function once(func) {
	var ans = func(arguments);
	return function () {
		return ans;
	}
}

function wrapper(func, wrapperFunc) {
	return function () {
		return wrapperFunc(func);
	};
}