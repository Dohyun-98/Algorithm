function solution(storey) {
  var answer = 0;
  // 문제정의
  // 절대값 10의 배수
  while (storey > 0) {
    const curTmp = storey % 10;
    const nextTmp = parseInt(storey / 10) % 10;
    if (curTmp === 5) {
      if (nextTmp >= 5) {
        answer += 5;
        storey += 5;
      } else {
        answer += 5;
        storey -= 5;
      }
    } else if (curTmp > 5) {
      answer += 10 - curTmp;
      storey += 10 - curTmp;
    } else {
      answer += curTmp;
      storey -= curTmp;
    }
    console.log(storey, answer);
    storey = parseInt(storey / 10);
  }
  return answer;
}
