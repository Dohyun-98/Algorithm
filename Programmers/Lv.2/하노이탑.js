function solution(n) {
  var answer = [];

  function DFS(L, begin, mid, end) {
    if (L === 1) answer.push([begin, end]);
    else {
      DFS(L - 1, begin, end, mid);
      answer.push([begin, end]);
      DFS(L - 1, mid, begin, end);
    }
  }
  DFS(n, 1, 2, 3);
  return answer;
}
