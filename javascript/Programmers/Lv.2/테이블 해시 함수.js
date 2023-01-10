function solution(data, col, row_begin, row_end) {
  let answer = 0;
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    else return a[col - 1] - b[col - 1];
  });
  for (let i = row_begin; i <= row_end; i++) {
    let si = 0;
    for (let j = 0; j < data[i - 1].length; j++) {
      si += data[i - 1][j] % i;
    }
    answer ^= si;
  }

  return answer;
}
