const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const people = parseInt(input[0].split(" ")[0]);
const returnPeople = input[1].split(" ").map((v) => +v);

const tmp = Array.from({ length: people }, (v, i) => i + 1);
const result = tmp.filter((el) => !returnPeople.includes(el));
if (result.length) console.log(result.join(" "));
else console.log("*");
