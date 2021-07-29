const lisp = (string) => {
	//Create an empty array. Array should remain empty
	let pushArr = [];
	//Create objects of characters to balance
	let symbolObj = {
		"[": "]",
		"{": "}",
		"(": ")",
	};

	for (let i = 0; i < string.length; i++) {
		if (string[i] === "[" || string[i] === "{" || string[i] === "(") {
			//Check to see if character at the specified value of the string is equal to the key value of the symbolObject
			pushArr.push(string[i]);
		} else {
			//Verify that the character at the specified value is equal to the key's value which was pushed to the pushArr previously.
			//pushArr.length should go from 1 to 0
			let removeLast = pushArr.pop();

			if (string[i] !== symbolObj[removeLast]) {
				return false;
			}
		}
	}

	if (pushArr.length !== 0) {
		return false;
	}

	return true;
};

//
