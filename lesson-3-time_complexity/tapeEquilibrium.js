const array = [3, 1, 2, 4, 3];

const solution = (A) => {
	const results = [];
	let givenArray;

	for (let i = 1; i < A.length; i++) {
		// first part
		givenArray = A.slice();
		let firstPart = givenArray.splice(0, i).reduce((acc, curr) => acc + curr);

		// second part
		givenArray = A.slice();
		let secondPart = givenArray.splice(i).reduce((acc, curr) => acc + curr);

		let result = Math.abs(firstPart - secondPart);
		results.push(result);
	}
	return results.sort((a, b) => a - b)[0];
};

console.log(solution(array));
