const givenArray = [4, 2, 2, 5, 1, 5, 8];

const solution = (A) => {
  // validation
  if (givenArray.length < 2 || givenArray.length > 100000){
    return "Given array has wrong length."
  }
  if (givenArray.find(element => element < -10000 || element > 10000)){
    return "Given array contains wrong value."
  }

  // function
  const slices = [];
  
  for(let i = 0; i < A.length - 1; i++){
    for(let j = (i + 1); j < A.length + 1; j++){
      const sliced = A.slice(i, j);
      if(sliced.length !== 1) {
        const slicedReduce = sliced.reduce((a, b) => {return a + b});
        const slicedDivision = slicedReduce / sliced.length;
  
        slices.push({i, slicedDivision});
      }
    }
  }

  const result = slices
    .sort((a, b) => a.slicedDivision - b.slicedDivision)
    .filter(element => element.slicedDivision === slices[0].slicedDivision )
    .sort((a, b) => a.i - b.i);

  return result[0].i;
};

console.log(solution(givenArray));