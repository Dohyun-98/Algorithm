function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;

  while (l <= r) {
    const min = people[l];
    const max = people[r];
    if (min + max <= limit) {
      answer++;
      l++;
      r--;
    } else {
      answer++;
      r--;
    }
  }
  return answer;
}
