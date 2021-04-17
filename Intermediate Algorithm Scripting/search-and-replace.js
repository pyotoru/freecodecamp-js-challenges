function isUpperCase(litera) {
	if (litera === litera.toUpperCase()) {
		return true;
	} else {
		return false;
	}
}
function toggleCase(litera) {
	if (isUpperCase(litera)) {
		return litera.toLowerCase();
	} else {
		return litera.toUpperCase();
	}
}
function shouldReplace(before, after) {
	if (isUpperCase(before[0]) !== isUpperCase(after[0])) {
		return true;
	} else {
		return false;
	}
}
function toggleFirstLetter(word) {
	return toggleCase(word[0]) + word.slice(1);
}

function myReplace(str, before, after) {
	if (shouldReplace(before, after)) {
		return str.replace(before, toggleFirstLetter(after));
	} else {
		return str.replace(before, after);
	}
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
