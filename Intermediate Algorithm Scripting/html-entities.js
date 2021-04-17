function convertHTML(str) {
	var newArray = [];
	for (let i = 0; i < str.length; i++) {
		if ((str[i] !== "&") | "<" | ">" | '"' | "'") {
			newArray.push(str[i]);
		} else {
			newArray.push("&amp;");
		}
	}
	return newArray;
}

console.log("20", convertHTML("Dolce & Gabba"));
