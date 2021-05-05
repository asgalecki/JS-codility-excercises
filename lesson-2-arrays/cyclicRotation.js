"use strict";

let array = [3, 8, 9, 7, 6];
let rotation = 3;

const solution = (A, K) => {
	for (let i = 0; i < K; i++) {
		let rotatedElement = A.pop();
		A.unshift(rotatedElement);
	}
	return A;
};

console.log(solution(array, rotation));
