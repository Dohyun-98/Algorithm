function solution(tickets) {
  tickets.sort();
  let answer = [];
  const ch = Array.from({ length: tickets.length }, () => 0);
  let isStop = false;
  const DFS = (start, tmp) => {
    if (isStop) return;
    if (tmp.length === tickets.length) {
      tmp.push(start);
      isStop = true;
      answer.push(tmp);
    } else {
      for (let i = 0; i < tickets.length; i++) {
        if (start === tickets[i][0] && ch[i] === 0) {
          ch[i] = 1;
          const tm = [...tmp];
          tm.push(start);
          DFS(tickets[i][1], tm);
          ch[i] = 0;
        }
      }
    }
  };
  DFS("ICN", []);

  return answer.shift();
}
