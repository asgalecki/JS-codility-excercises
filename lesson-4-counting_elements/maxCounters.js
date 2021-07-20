
const array = [3, 4, 4, 6, 1, 4, 4]; 
const N = 5;

const initCounters = (countersLength) => {
  const initCounters = [];
  for(let i = 0; i < N; i++){
    initCounters.push(0);
  }
  return initCounters;
}

const solution = (N, A) => {
  const counters = initCounters(N);

  array.forEach(element => {
    if (element >= 1 && element <= N) {
      counters[element-1]++;
    }
    if (element === (N + 1)) {
      const biggestValue = Math.max(...counters);
      counters.fill(biggestValue);
    }
  })

  return counters;
}

console.log(solution(N, array));