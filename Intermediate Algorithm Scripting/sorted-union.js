function convertHTML(str) {
	var string = str;
	var replacing = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
	};
	string = string.replace(/&|<|>|"|'/gi, function (matched) {
		return replacing[matched];
	});
	return string;
}
console.log(convertHTML("&"));
