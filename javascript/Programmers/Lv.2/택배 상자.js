function solution(order) {
  var answer = 0;
  const stack = [];
  let boxNum = 1;
  for (let i = 0; i < order.length; i++) {
    if (order[i] === boxNum) {
      answer++;
      boxNum++;
    } else {
      while (order[i] >= boxNum && boxNum <= order.length) {
        stack.push(boxNum);
        boxNum++;
      }
      if (order[i] === stack.pop()) {
        answer++;
      } else {
        break;
      }
    }
  }

  return answer;
}
