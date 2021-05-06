const X = 10;
const Y = 85;
const D = 30;

const solution = (currentPosition, target, jump) => {
	const distance = target - currentPosition;
	const isModulo = distance % jump;

	if (isModulo === 0) {
		return (jumps = Math.floor(distance / jump));
	} else {
		return (jumps = Math.floor(distance / jump) + 1);
	}
};

console.log(solution(X, Y, D));
