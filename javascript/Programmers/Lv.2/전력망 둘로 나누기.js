function solution(n, wires) {
  let answer = 101;
  let visited = Array.from({ length: n + 1 }, () => 0);
  // 그래프를 만든다.
  let graph = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );

  for (let [a, b] of wires) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  function BFS(L, cnt) {
    const que = [];
    visited[L] = 1;
    que.push(L);
    while (que.length) {
      const length = que.length;
      cnt += length;
      for (let k = 0; k < length; k++) {
        const L = que.shift();
        for (let i = 1; i <= graph[L].length; i++) {
          if (visited[i] === 0 && graph[L][i] !== 0) {
            visited[i] = 1;
            que.push(i);
          }
        }
      }
    }
    return cnt;
  }

  for (let [x, y] of wires) {
    visited = Array.from({ length: n + 1 }, () => 0);
    graph[x][y] = 0;
    graph[x][y] = 0;
    const a = BFS(x, 0);
    const b = BFS(y, 0);
    graph[x][y] = 1;
    graph[x][y] = 1;
    answer = Math.min(answer, Math.abs(a - b));
  }

  // 연결점을 끊고 DFS 탐색
  // 모든 레벨에서 탐색

  return answer;
}
