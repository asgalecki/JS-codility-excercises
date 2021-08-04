const nucleotides = {
  A: 1,
  C: 2,
  G: 3,
  T: 4,
}

const solution = (S, P, Q) => {
  // || max range
  const M = 100000;
  const N = 50000;

  // || validation
  const regex = /[ACGT]+/;
  const validation = regex.test(S);

  if (!validation){
    return "The DNA sequence contains incorrect values.";
  };
  if (!S.length || S.length > M){
    return "The DNA sequence has an incorrect length.";
  };
  if (!P.length || P.length > N) {
    return "Array P has an incorrect length.";
  };
  if (!Q.length || Q.length > N) {
    return "Array Q has an incorrect length.";
  };

  // || function
  const result = [];
  const sequence = [...S];

  for(let i = 0; i < P.length; i++){
    let value;
    
    if(P[i] < 0 || P[i] > N) {
      return `Array Q has an incorrect value: ${P[i]}.`
    }
    if(Q[i] < 0 || Q[i] > N) {
      return `Array Q has an incorrect value: ${Q[i]}.`
    };
    if(P[i] > Q[i]) {
      return `Array P contains value: ${P[i]} that is > than array Q value ${Q[i]}.`;
    };

    if(P[i] !== Q[i]){
      const query = sequence.slice(P[i], Q[i])
      value = query.sort()[0];
    } else {
      value = sequence[P[i]];
    }

    result.push(nucleotides[value]);
  }

  console.log(result);
  return;
};

const S = "CAGCCTA";
const P = [2, 5, 0];
const Q = [4, 5, 6];

const result = solution(S, P, Q);