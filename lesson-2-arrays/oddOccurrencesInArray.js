arr = [9, 3, 9, 3, 9, 7, 9];

const solution = (givenArray) => {
	const checkedElements = [];

	for (let i = 0; i < givenArray.length; i++) {
		if (!checkedElements.includes(givenArray[i])) {
			let givenArrayCopy = givenArray.slice();
			let filteredArray = givenArrayCopy.filter(
				(element) => element === givenArray[i]
			);

			if (filteredArray.length === 1) {
				return givenArray[i];
			}
		}
	}
};

console.log(solution(arr));
