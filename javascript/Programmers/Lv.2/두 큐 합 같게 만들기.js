function solution(queue1, queue2) {
  var answer = 0;
  const sum = queue1.reduce((a, b, i) => a + (b + queue2[i]), 0);
  const mid = Math.floor(sum / 2);
  const sumArr = [...queue1, ...queue2];
  let q1sum = queue1.reduce((a, b) => a + b, 0);
  let l = 0;
  let r = queue1.length - 1;

  while (l <= r) {
    if (sum - q1sum === q1sum) return answer;
    if (mid > q1sum) {
      r++;
      q1sum += sumArr[r];
    } else {
      q1sum -= sumArr[l];
      l++;
    }
    answer++;
  }
  return -1;
}
