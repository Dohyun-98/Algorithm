function solution(k, dungeons) {
  const ch = Array.from({ length: dungeons.length }, () => 0);
  var answer = -1;

  function DFS(p, cnt) {
    for (let i = 0; i < dungeons.length; i++) {
      if (ch[i] === 0 && p >= dungeons[i][0]) {
        ch[i] = 1;
        DFS(p - dungeons[i][1], cnt + 1);
        ch[i] = 0;
      }
    }
    answer = Math.max(answer, cnt);
    return;
  }

  DFS(k, 0);
  return answer;
}
