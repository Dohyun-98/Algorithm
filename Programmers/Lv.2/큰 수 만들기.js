function solution(number, k) {
  var answer = 0;
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    // console.log(k,stack);
    while (stack.length && stack[stack.length - 1] < number[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  stack.splice(stack.length - k, k);
  return stack.join("");
}
