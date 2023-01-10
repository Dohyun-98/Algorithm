function solution(n, info) {
  var answer = [];
  let diffScore = 0;
  const score = Array.from({ length: info.length }, () => 0);
  // 깊이 탐색 - 어치피 점수 와 라이언 점수
  function DFS(L, aScore, lScore, n, score) {
    if (n < 0) return;
    if (L === info.length) {
      if (lScore - aScore > diffScore) {
        if (n > 0) score[L - 1] = score[L - 1] + n;
        answer = score.slice();
        diffScore = lScore - aScore;
      }
    } else {
      let tmp = [...score];
      if (n - (info[L] + 1) >= 0) {
        tmp[L] = info[L] + 1;
        DFS(L + 1, aScore, lScore + info.length - L, n - (info[L] + 1), tmp);
        tmp[L] = 0;
      }
      if (info[L] === 0) {
        DFS(L + 1, aScore, lScore, n, tmp);
      } else {
        DFS(L + 1, aScore + info.length - L, lScore, n, tmp);
      }
    }
  }
  DFS(0, 0, 0, n, score);
  return answer.length > 0 ? answer : [-1];
}
