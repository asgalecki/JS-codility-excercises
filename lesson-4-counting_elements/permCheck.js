const array = [4, 1, 3, 2];

const solution = (A) => {
	const arrayLengthSum = (arr) => {
		let j = 0;
		for (let i = 0; i <= arr.length; i++) {
			j += i;
		}
		return j;
	};

	const arrayTransform = A.reduce(function (a, b) {
		return a + b;
	});

	if (arrayLengthSum(A) === arrayTransform) {
		return 1;
	} else {
		return 0;
	}
};

console.log(solution(array));
