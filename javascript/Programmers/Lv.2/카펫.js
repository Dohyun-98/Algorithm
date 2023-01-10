function solution(brown, yellow) {
  var answer = [];
  const totalBlock = brown + yellow;
  for (let i = 0; i < totalBlock; i++) {
    if (totalBlock % i === 0) {
      const row = Math.floor(totalBlock / i);
      if ((i - 2) * (row - 2) === yellow) {
        return [row, i];
      }
    }
  }

  return answer;
}
