function solution(n, a, b) {
  let answer = 0;
  let k = 2;
  while (k <= n) {
    answer++;
    const v = parseInt(n / k);
    for (let i = 1; i <= v; i++) {
      if (a <= i * k && i * k - k < a && b <= i * k && i * k - k < b) {
        return answer;
      }
    }
    k = k * 2;
  }
  return answer;
}
