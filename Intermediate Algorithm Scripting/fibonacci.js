function sumFibs(num) {
	var numbers = [1, 1];
	for (let i = 2; i < num; i++) {
		if (i % 2 !== 0) {
			numbers.push(i);
			numbers[i] = numbers[i - 2] + numbers[i - 1];
		}
	}

	return numbers;
}
console.log(sumFibs(10));
