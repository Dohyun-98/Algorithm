const [n, ...hills] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i <= 100 - 17; i++) {
  let tmp = 0;
  for (let j = 0; j < n; j++) {
    if (hills[j] < i) tmp += (i - hills[j]) * (i - hills[j]);
    if (hills[j] > i + 17) tmp += (hills[j] - i - 17) * (hills[j] - i - 17);
  }
  answer = Math.min(answer, tmp);
}

console.log(answer);
