function solution(n, lighthouse) {
  const isGone = Array.from({ length: n + 1 }, () => 0);
  // 연결된 등대 간선에서 불이 하나 들어와 있는지 확인하는 용도
  var answer = 0;
  while (lighthouse.length) {
    // 간선 중 불이 하나도 켜지지 않은 경로가 존재하지 않을 때 까지
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let [a, b] of lighthouse) {
      graph[a].push(b);
      graph[b].push(a);
    }
    // 간선이 하나인 노드를 찾는다.
    for (let i = 0; i < graph.length; i++) {
      if (graph[i].length === 1) {
        // v 변수에 간선이 하나인 노드의 목적지를 저장
        const v = graph[i];
        // 노드의 목적지가 불이 꺼져있을 때
        if (!isGone[v]) {
          // 불을 켜준다.
          isGone[v] = 1;
          // 목적지의 간선 개수가 1개가 아닐 때
          if (graph[v].length !== 1) answer++;
          // 1개 이상일 때
          else answer += 0.5;
        }
      }
    }
    lighthouse = lighthouse.filter((el) => {
      // 뱃길 중 경로에서 한쪽도 불이 안켜져 있는 경로만 남긴다.
      const [a, b] = el;
      return !isGone[a] && !isGone[b];
    });
  }

  return answer;
}
