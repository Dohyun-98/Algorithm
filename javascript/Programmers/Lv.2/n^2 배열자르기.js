function solution(n, left, right) {
  let answer = [];

  for (let i = left; i <= right; i++) {
    // 1 2 3 , 2 2 3, 3 3 3
    // 0 1 2   3 4 5  6 7 8
    // left 2  right 5
    const origin = (i + 1) % n === 0 ? n : (i + 1) % n;
    const idx = Math.ceil((i + 1) / n);
    answer.push(origin < idx ? idx : origin);
  }
  return answer;
}
