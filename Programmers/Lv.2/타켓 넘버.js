function solution(numbers, target) {
  var answer = 0;
  function DFS(v, sum) {
    if (v === numbers.length) {
      if (sum === target) answer++;
      return;
    } else {
      DFS(v + 1, sum + numbers[v]);
      DFS(v + 1, sum - numbers[v]);
    }
  }
  DFS(0, 0);
  return answer;
}
