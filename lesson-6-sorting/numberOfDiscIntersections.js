const solution = (A) => {

  // validation
  if(!A.length && A.length > 100000){
    return "Given array has wrong length.";
  };

  const validation = A
    .slice()
    .filter(element => element > 2147483647 || element < 0);

  if(validation.length){
    return "Array contains wrong value.";
  }

  // solution
  const sortedArray = [];

  for(let i = 0; i < A.length; i++){
    sortedArray.push({position: i, radius: A[i]})
  }
  sortedArray.sort((a, b) => b.radius - a.radius);
  
  let pairs = 0;
  sortedArray.slice().forEach(element => {
    for(let i = 0; i < sortedArray.length; i++){

      const position = sortedArray[i].position;
      const maxRange = element.position + element.radius;
      const minRange = element.position - element.radius;

      if(sortedArray[i] !== element){
        if(position < maxRange && position > minRange){
          pairs++;
        }
      }
    }
  })
  return pairs;
}

const givenArray = [1, 5, 2, 1, 4, 0];
console.log(solution(givenArray));