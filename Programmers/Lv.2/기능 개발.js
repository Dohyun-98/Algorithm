function solution(progresses, speeds) {
  var answer = [];
  const tmp = [];
  let cnt = 1;
  for (let i = 0; i < progresses.length; i++) {
    tmp.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let cur = tmp[0];
  for (let i = 0; i < tmp.length; i++) {
    if (cur < tmp[i + 1] || i === tmp.length - 1) {
      cur = tmp[i + 1];
      answer.push(cnt);
      cnt = 1;
    } else {
      cnt++;
    }
  }
  return answer;
}
