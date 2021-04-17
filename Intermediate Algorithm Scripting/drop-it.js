function dropElements(arr, func) {
	var array = arr;
	var i = 0;
	while (func(array[i]) == false) {
		array.shift();
	}
	return array;
}
console.log(
	dropElements([1, 2, 3, 4], function (n) {
		return n >= 3;
	})
);
