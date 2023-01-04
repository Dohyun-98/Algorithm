const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const nums = parseInt(input[0].split(" ")[0]);
const rounds = parseInt(input[0].split(" ")[1]);
const scores = input[1].split(" ").map((v) => +v);

const score = Array.from({ length: nums }, () => 0);
let count = 0;
for (let scorenum of scores) {
  if (count === nums) count = 0;
  score[count++] += scorenum;
}

let max = 0;
let answer = 0;
score.forEach((el, i) => {
  if (max <= el) {
    max = el;
    answer = i + 1;
  }
});
console.log(answer);
