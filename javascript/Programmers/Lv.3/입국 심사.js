function solution(n, times) {
  times.sort((a, b) => a - b);
  let r = times[times.length - 1] * n;
  var answer = r;
  let l = 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    let amount = 0;
    for (let i = 0; i < times.length; i++) {
      amount += Math.floor(mid / times[i]);
    }
    if (amount >= n) {
      answer = Math.min(answer, mid);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return answer;
}
