function binaryAgent(str) {
	var decimals = [];
	var splittingBinaries = str.split(" ");
	for (let i = 0; i < splittingBinaries.length; i++) {
		decimals.push(parseInt(splittingBinaries[i], 2));
	}
	console.log(decimals);
	return str;
}
console.log(
	binaryAgent(
		"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
	)
);
