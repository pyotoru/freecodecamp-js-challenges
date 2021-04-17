function addTogether(arg1, arg2) {
	if (typeof arguments[1] == "number" && arguments.length == 2) {
		return arg1 + arg2;
	} else if (typeof arguments[0] == "number" && arguments.length == 1) {
		var arg1 = arguments[0];

		return function (arg2) {
			if (arg1 === undefined || typeof arg2 !== "number") {
				return undefined;
			} else {
				return arg1 + arg2;
			}
		};
	}
}
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));
