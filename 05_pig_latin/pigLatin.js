function translate(words) {
	var vowels = { a: true, e: true, i: true, o: true, u: true };
	var wordList = words.split(" ");
	var results = [];

	function translateWord(word) {
		var firstIndex = -1;
		var result = "";

		// find the first vowel's index
		for (var i = 0; i < word.length; i++) {
			if (word[i] in vowels) {
				firstIndex = i;
				break;
			}
		}

		// word begins with consonant(s)
		if (firstIndex > 0) {
			// edge case - if 'qu' at start of word, treat it together as consonant
			if (word[firstIndex-1] == 'q' && word[firstIndex] === 'u') {
				firstIndex++;
			}
			result = word.substring(firstIndex) + word.substring(0, firstIndex);
		} 
		else {
			result = "" + word;
		}

		result += "ay";
		return result;
	}

	for (var i = 0; i < wordList.length; i++) {
		results.push(translateWord(wordList[i]));
	}
	return results.join(" ");
}