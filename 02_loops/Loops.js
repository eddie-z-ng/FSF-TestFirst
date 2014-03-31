function repeat(phrase, numtimes) {
	var result = "";
	for (var i = 0; i < numtimes; i++) {
		result += phrase;
	}
	return result;
}

function join(arr, delim) {
	var result = "";
	var delim = delim || "";
	for (var i = 0; i < arr.length; i++) {
		result += arr[i] + ((i < arr.length -1) ? delim : "");
	}
	return result;
}

function sum(arr) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}

function paramify(item) {
	var result = "";
	var keys = [];
	for (var key in item) {
		if (item.hasOwnProperty(key)) {
			keys.push(key);
		}
	}
	keys.sort();
	for (var i = 0; i < keys.length; i++) {
		result += keys[i] + "=" + item[keys[i]];
		if (i < keys.length - 1) {
			result += "&";
		}
	}
	return result;
}

function factorial(num) {
	var result = 1;
	while (num > 0) {
		result *= num;
		num--;
	}
	return result;
}

function concat_string() {
	var result = "";
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}