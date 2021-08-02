const solution = (A, B, K) => {
  let result = 0;
  for (let i = A; i <= B; i++ ){
    if(i % K === 0){
      result++;
    }
  }
  console.log(result);
}

solution(6, 11, 2);