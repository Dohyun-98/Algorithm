function solution(citations) {
  var answer = 0;
  for (let i = 1; i <= citations.length; i++) {
    let count = 0;
    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= i) count++;
    }
    if (count >= i) answer = Math.max(answer, i);
  }
  return answer;
}
