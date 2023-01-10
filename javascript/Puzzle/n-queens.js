function solution(n) {
  var answer = 0;
  const arr = Array.from({ length: n }, () => 0);

  function DFS(L) {
    if (L === n) answer++;
    for (let i = 0; i < n; i++) {
      arr[L] = i;
      if (isCheck(L)) {
        DFS(L + 1);
      }
    }
  }
  function isCheck(L) {
    for (let i = 0; i < L; i++) {
      if (arr[i] === arr[L] || L - i == Math.abs(arr[i] - arr[L])) {
        return false;
      }
    }

    return true;
  }
  DFS(0);
  return answer;
}
