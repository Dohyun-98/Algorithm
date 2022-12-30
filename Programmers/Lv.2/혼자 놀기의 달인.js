function solution(cards) {
  var answer = 0;
  const tmp = [];
  const isGone = Array.from({ length: cards.length }, () => 0);
  for (let i = 0; i < cards.length; i++) {
    if (isGone[i] === 0) {
      const que = [];
      isGone[i] = 1;
      que.push(cards[i]);
      let cnt = 0;
      while (que.length) {
        const v = que.shift();
        if (isGone[v - 1] === 0) {
          que.push(cards[v - 1]);
          isGone[v - 1] = 1;
        }
        cnt++;
      }
      tmp.push(cnt);
    }
  }
  if (tmp.length >= 2) {
    tmp.sort((a, b) => a - b);
    const a = tmp.pop();
    const b = tmp.pop();
    answer = a * b;
  }
  return answer;
}
