// 첫번째 시도
// 테스트 1,2 제외 싪패
// function solution(n, costs) {
//     var answer = Number.MAX_SAFE_INTEGER;
//     const graph = Array.from({length:n},()=>Array.from({length:n},()=>0));
//     for(let [a,b,c] of costs){
//         graph[a][b] = c;
//         graph[b][a] = c;
//     }
//     for(let i=0;i<graph.length;i++){
//             const que = [];
//             const visit = Array.from({length:n},()=>0);
//             let cost = 0;
//             visit[i] = 1
//             // 출발지
//             que.push([i,0])
//             while(que){
//                 const [v,t]  = que.shift()
//                 if(visit.every((el)=>el === 1)){
//                     answer = Math.min(answer,t)
//                 }
//                 let tmp = Number.MAX_SAFE_INTEGER;
//                 let tmpI;
//                 for(let k=0;k<graph[v].length;k++){
//                     if(visit[k] === 0 && graph[v][k] !== 0 && tmp > graph[v][k]){
//                         tmp = graph[v][k];
//                         tmpI = k
//                     }
//                 }
//                 if(tmp === Number.MAX_SAFE_INTEGER){
//                     break;
//                 }
//                 visit[tmpI] = 1
//                 que.push([tmpI,t+tmp])
//             }

//     }
//     return answer;
// }

// 크루스칼 알고리즘
// 가중치가 할당된 그래프에서 최소 신장 트리를 찾는 알고리즘
// 완성되는 간선의 개수는 정점의 개수 -1

// 1. 간선을 가중치의 오름차순으로 정렬
// 2. 간선을 하나씩 확인하며, 사이클이 발생하지 않는 경우 최소 신장 트리에 포함
// 3. 모든 간선에 대해 2번 과정 반복

function getParent(parent, x) {
  if (parent[x] == x) return x;
  return getParent(parent, parent[x]);
}

function unionParent(parent, a, b) {
  const x = getParent(parent, a);
  const y = getParent(parent, b);
  if (x > y) parent[x] = y;
  else parent[y] = x;
}

function compareParent(parent, a, b) {
  const x = getParent(parent, a);
  const y = getParent(parent, b);
  if (x === y) return 1;
  else return 0;
}

function solution(n, costs) {
  let answer = 0;
  let count = 0;

  costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);
  for (let [a, b, c] of costs) {
    if (!compareParent(parent, a, b)) {
      unionParent(parent, a, b);
      answer += c;
      count++;
    }
    if (count == n - 1) break;
  }
  return answer;
}
