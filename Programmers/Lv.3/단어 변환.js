function solution(begin, target, words) {
  var answer = Number.MAX_SAFE_INTEGER;
  const isUse = Array.from({ length: words.length }, () => 0);
  if (!words.includes(target)) return 0;
  function DFS(begin, target, count) {
    if (begin === target) {
      answer = Math.min(answer, count);
    } else {
      const diff1 = [];
      words.forEach((el, idx) => {
        let count = 0;
        if (el.length === begin.length) {
          for (let i = 0; i < el.length; i++) {
            if (begin[i] !== el[i]) count++;
          }
          if (count === 1) diff1.push(idx);
        }
      });

      for (let i = 0; i < diff1.length; i++) {
        if (isUse[diff1[i]] === 0) {
          isUse[diff1[i]] = 1;
          DFS(words[diff1[i]], target, count + 1);
          isUse[diff1[i]] = 0;
        }
      }
    }
  }
  DFS(begin, target, 0);
  return answer;
}
