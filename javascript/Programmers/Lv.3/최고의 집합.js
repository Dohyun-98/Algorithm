function solution(n, s) {
  // 최대한 균일하게 분등한 후 뒤에서부터 남은 수는 하나씩 추가;;;
  if (n > s) return [-1];
  const mid = Math.floor(s / n);
  // 8 / 5
  const answer = new Array(n).fill(mid);
  console.log(answer);
  for (let i = 0; i < s % n; i++) {
    // s & n  8 % 5
    answer[answer.length - 1 - i]++;
  }
  console.log(answer);

  return answer;
}
