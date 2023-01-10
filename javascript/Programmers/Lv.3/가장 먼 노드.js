function solution(n, edge) {
  var answer = [];
  const graph = Array.from({ length: n + 1 }, () => []);
  const isGone = Array.from({ length: n + 1 }, () => false);
  for (let [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const que = [];
  que.push(1);
  isGone[1] = true;
  while (que.length) {
    const length = que.length;
    answer.push(length);
    for (let i = 0; i < length; i++) {
      const v = que.shift();
      for (let j = 0; j < graph[v].length; j++) {
        if (!isGone[graph[v][j]]) {
          isGone[graph[v][j]] = true;
          que.push(graph[v][j]);
        }
      }
    }
  }
  return answer[answer.length - 1];
}
