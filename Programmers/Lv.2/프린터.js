function solution(priorities, location) {
  var answer = 0;
  const queue = [];
  const select = Array.from({ length: priorities.length }, () => 0);
  select[location] = 1;
  while (true) {
    const value = priorities.shift();
    const sl = select.shift();
    if (priorities.every((el) => value >= el)) {
      answer++;
      if (sl === 1) {
        return answer;
      }
    } else {
      priorities.push(value);
      select.push(sl);
    }
  }
  return -1;
}
