// 1차 시도 6 ~ 10 메모리 초과
function solution(n, l, r) {
  var answer = 0;
  let str = "1";
  for (let i = 0; i < n; i++) {
    let tmp = "";
    str.split("").forEach((el) => {
      if (el === "1") tmp += "11011";
      else tmp += "00000";
    });
    str = tmp;
  }

  answer = str
    .slice(l - 1, r)
    .split("")
    .reduce((acc, cur) => {
      if (cur === "1") return (acc += 1);
      else return (acc += 0);
    }, 0);
  return answer;
}
