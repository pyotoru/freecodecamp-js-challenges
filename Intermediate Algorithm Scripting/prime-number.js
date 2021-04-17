function primeNumber(num) {
	var array2 = [];
	var total = 0;
	if (num === 1 || num === 0) {
		return false;
	}
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}
primeNumber(1);

function sumPrimes(num) {
	var array = [];
	var total = 0;
	for (let i = 2; i <= num; i++) {
		if (primeNumber(i)) {
			total += i;
		}
	}
	return total;
}
console.log(sumPrimes(977));
