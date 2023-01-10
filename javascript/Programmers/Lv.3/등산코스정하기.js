function solution(n, paths, gates, summits) {
  var answer = [];
  // 쉼터 , 산봉우리는 휴식 !
  // 휴식없이 이동해야하는 시간 중 가장 긴 시간을 intensity
  // 양방향 그래프
  const graph = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  for (let [a, b, c] of paths) {
    graph[a][b] = c;
  }
  const isGone = Array.from({ length: n + 1 }, () => 0);

  function DFS(L, isSummits, isStartPlace, summits, intensity) {
    console.log(intensity);
    if (L === isStartPlace && isSummits) {
      answer.push([summits, intensity]);
      return;
    }
    if (L === summits) {
      isSummits = true;
    }
    for (let i = 1; i < graph[L].length - 1; i++) {
      if (graph[L][i] !== 0 && isGone[i] < 3) {
        isGone[i]++;
        DFS(
          i,
          isSummits,
          isStartPlace,
          summits,
          Math.max(intensity, graph[L][i])
        );
        isGone[i]--;
        DFS(
          i,
          isSummits,
          isStartPlace,
          summits,
          Math.max(intensity, graph[L][i])
        );
      }
    }
  }
  for (let i = 0; i < gates.length; i++) {
    for (let j = 0; j < summits.length; j++) {
      DFS(gates[i], false, gates[i], summits[i], 0);
    }
  }

  return answer;
}
