function solution(n, computers) {
  let answer = 0;
  const ch = Array.from({ length: n + 1 }, () => 0);
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (computers[i][j] === 1) {
        if (i == j && computers[i][j] === 1) answer++;
        else {
          computers[i][j] = 0;
          DFS(j);
        }
      }
    }
  }

  function DFS(y) {
    for (let i = 0; i < computers[y].length; i++) {
      if (computers[y][i] === 1) {
        computers[y][i] = 0;
        DFS(i);
      }
    }
  }
  return answer;
}
