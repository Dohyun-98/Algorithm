const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const originArr = input[0].split(" ").map((v) => +v);
const wantArr = input[1].split(" ").map((v) => +v);

const result = wantArr.reduce((acc, cur, i) => {
  if (cur > originArr[i]) {
    return acc + (cur - originArr[i]);
  } else {
    return acc + 0;
  }
}, 0);

console.log(result);
