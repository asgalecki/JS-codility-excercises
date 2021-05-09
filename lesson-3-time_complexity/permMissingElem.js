const arrayExample = [2, 3, 1, 5];

const solution = (givenArray) => {
	for (let i = 0; i < givenArray.length; i++) {
		let missingElement = givenArray.find((element) => element === i + 1);
		if (!missingElement) {
			return i + 1;
		}
	}
};

console.log(solution(arrayExample));
