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
