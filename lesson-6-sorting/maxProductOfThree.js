const givenArray = [-3, 1, 2, -2, 5, 6];

const solution = (A) => {
  if(A.length < 3 || A.length > 100000){
    return "Given array has wrong length."
  }

  A.sort((a, b) => b - a);

  if(A[0] > 1000 || A[A.length - 1] < -1000){
    return "Given array contains wrong value."
  }

  const triplet = [A[2], A[1], A[0]];
  const result = triplet[0] * triplet[1] * triplet[2];
  return result;
}

console.log(solution(givenArray));