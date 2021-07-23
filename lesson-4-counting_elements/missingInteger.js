const givenArray = [1, 3, 6, 4, 1, 2];

const solution = (array) => {
  let result;

  for(let i = 1; i <= givenArray.length; i++){
    const integer = array.includes(Number(i));
    if(!integer){
      result = i;
      break;
    }
  }

  return result;
};

const result = solution(givenArray);
console.log(result);