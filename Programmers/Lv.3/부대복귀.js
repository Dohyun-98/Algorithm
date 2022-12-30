function solution(n, roads, sources, destination) {
  var answer = Array.from({ length: sources.length }, () => -1);
  const que = [];
  // 목적지를 que에 집어넣는다
  const graph = Array.from({ length: n + 1 }, () => []);
  const isGone = Array.from({ length: n + 1 }, () => 0);
  for (const [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }
  que.push(destination);
  isGone[destination] = 1;
  let count = 0;
  while (que.length) {
    const length = que.length;
    for (let k = 0; k < length; k++) {
      const v = que.shift();
      for (let j = 0; j < sources.length; j++) {
        if (sources[j] === v && answer[j] === -1) {
          answer[j] = count;
        }
      }
      for (let i = 0; i < graph[v].length; i++) {
        if (isGone[graph[v][i]] === 0) {
          if (graph[v][i] !== 0) {
            que.push(graph[v][i]);
            isGone[graph[v][i]] = 1;
            graph[v][i] = 0;
          }
        }
      }
    }
    count++;
  }
  return answer;
}
