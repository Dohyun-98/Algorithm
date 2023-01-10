function solution(topping) {
  var answer = 0;
  const origin = {};
  const sli = {};
  origin.length = 0;
  sli.length = 0;
  for (let i = 0; i < topping.length; i++) {
    if (origin[topping[i]]) {
      origin[topping[i]] = origin[topping[i]] + 1;
    } else {
      origin.length = origin.length + 1;
      origin[topping[i]] = 1;
    }
  }
  for (let i = 0; i < topping.length; i++) {
    if (sli[topping[i]]) {
      sli[topping[i]] = sli[topping[i]] + 1;
    } else {
      sli.length = sli.length + 1;
      sli[topping[i]] = 1;
    }
    if (origin[topping[i]] >= 2) {
      origin[topping[i]] = origin[topping[i]] - 1;
    } else if ((origin[topping[i]] = 1)) {
      origin.length = origin.length - 1;
      delete origin[topping[i]];
    }
    if (origin.length === sli.length) answer++;
  }
  return answer;
}
