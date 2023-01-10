function solution(s) {
  var answer = 1;
  if (s === "") return 0;
  if (s.length === 1) return 1;
  if (s.length === 2) {
    if (s[0] === s[1]) return 2;
    else return 1;
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  for (let i = 0; i < s.length; i++) {
    let mid = s[i];
    let left = i - 1;
    let right = i + 1;
    if (mid === s[right]) {
      answer = Math.max(answer, 2);
      right++;
      let lstring = "";
      let rstring = "";
      while (left >= 0 && right < s.length) {
        lstring += s[left];
        rstring += s[right];
        if (lstring == rstring) {
          answer = Math.max(answer, lstring.length * 2 + 2);
          left--;
          right++;
        } else {
          break;
        }
      }
    }
    left = i - 1;
    right = i + 1;
    let lstring = "";
    let rstring = "";
    while (left >= 0 && right < s.length) {
      lstring += s[left];
      rstring += s[right];
      if (lstring == rstring) {
        answer = Math.max(answer, lstring.length * 2 + 1);
        left--;
        right++;
      } else {
        break;
      }
    }
  }

  return answer;
}
