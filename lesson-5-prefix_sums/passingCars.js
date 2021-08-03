const givenArray = [0, 1, 0, 1, 1];

const solution = (A) => {
  let zeroes = 0;
  let pairs = 0;

  for (let i = 0; i < A.length; i++){
    A[i] === 0 ? zeroes++ : pairs += zeroes;
    if(pairs > 1000000000){
      return -1;
    }
  }

  return pairs;
}

console.log(solution(givenArray));