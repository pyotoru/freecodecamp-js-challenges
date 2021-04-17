function smallestCommons(arr) {
	var array = [];
	if (arr[0] < arr[1]) {
		let did_any_of_the_numbers_not_evenly_divide_the_target_number = false;
		for (let i = arr[1]; (i += arr[1]); ) {
			let did_any_of_the_numbers_not_evenly_divide_the_target_number = false;
			for (let j = arr[0]; j <= arr[1]; j++) {
				if (i % j !== 0) {
					did_any_of_the_numbers_not_evenly_divide_the_target_number = true;
				}
			}
			if (
				did_any_of_the_numbers_not_evenly_divide_the_target_number ===
				false
			) {
				return i;
			}
		}
	} else if (arr[1] < arr[0]) {
		let did_any_of_the_numbers_not_evenly_divide_the_target_number = false;
		for (let i = arr[0]; (i += arr[0]); ) {
			let did_any_of_the_numbers_not_evenly_divide_the_target_number = false;
			for (let j = arr[1]; j <= arr[0]; j++) {
				if (i % j !== 0) {
					did_any_of_the_numbers_not_evenly_divide_the_target_number = true;
				}
			}
			if (
				did_any_of_the_numbers_not_evenly_divide_the_target_number ===
				false
			) {
				return i;
			}
		}
	}
}
console.log(smallestCommons([2, 6]));
