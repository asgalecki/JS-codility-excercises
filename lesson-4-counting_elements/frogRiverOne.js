const fallenLeaves = [1, 3, 1, 4, 2, 3, 5, 4];
const riverWidth = 5;

const solution = (riverWidth, fallenLeaves) => {
	const completedPath = [];

	for (let i = 1; i - 1 < riverWidth; i++) {
		let j = fallenLeaves.indexOf(i, [i - 1]);
		completedPath.push(j);
	}

	if (!completedPath.includes(-1)) {
		return completedPath.sort().reverse()[0];
	} else {
		return -1;
	}
};

console.log(solution(riverWidth, fallenLeaves));
