"use strict";

const compareNumbers = (a, b) => {
	return b - a;
};

const solution = (N) => {
	const bin = N.toString(2);

	const binaryGaps = [];

	let j = 0;
	const binaryArray = Array.from(bin);

	for (let i = 0; i <= binaryArray.length; i++) {
		if (Number(binaryArray[i]) === 1) {
			binaryGaps.push(j);
			j = 0;
		} else {
			j++;
		}
	}

	binaryGaps.sort(compareNumbers);
	return binaryGaps[0];
};

console.log(solution(35));
