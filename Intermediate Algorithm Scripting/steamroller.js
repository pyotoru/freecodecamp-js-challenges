function steamrollArray(arr) {
	var array = [];
	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			array.push(arr[i]);
		} else {
			steamrollArray(arr[i]);
		}
	}
	return array;
}

console.log(steamrollArray([1, [2], 3]));
console.log(steamrollArray([1, [2], 3]));
console.log(steamrollArray([[["a"]], [["b"]]]));
