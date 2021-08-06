const givenArray = [2, 1, 1, 2, 3, 1];

const solution = (A) => {
  if(!A.length || A.length > 100000){
    return "Array has wrong length.";
  }
  
  // validation
  const validation = A.filter(element => element > 100000 || element < -100000);
  if(validation.length){
    return "Array contains wrong value.";
  }

  const result = new Set(givenArray);
  return result.size;
}

console.log(solution(givenArray));